export const optionsObjectToArray = (object) => {
    const objectArray = Object.entries(object);
    return objectArray.reduce((acc, curr) => {
        if (curr[1].length !== 0) {
            const arrayItems = curr[1].map((item) => {
                return item.value;
            });
            arrayItems[0].length && acc.push(`${curr[0]}=${arrayItems}`);
        }
        return acc;
    }, []);
};

export const optionsToQueryString = (options) => {
    const arrayOfOptions = optionsObjectToArray(options);
    let queryString = '';
    if (arrayOfOptions.length) {
        arrayOfOptions.map((option, index) => {
            if (index < arrayOfOptions.length - 1) {
                queryString = queryString + option + '&';
            } else {
                queryString = queryString + option
            }
        });
    }
    return queryString;
};

export const splitter = (string, splitter) => {
    return string.split(splitter);
};

export const parseQueryParams = (url) => {
    let validUrl = decodeURI(url).slice(1);
    let findIndex = validUrl.search(/[?]/);
    if (findIndex !== -1) validUrl = validUrl.slice(0, findIndex);
    validUrl = validUrl.replace(/\s/g, '');
    let arrayOfParams = validUrl.split('&').filter((params) => {
        return !!params.length;
    });
    return arrayOfParams.reduce((acc, curr) => {
        const arrayOfParam = curr.split('=');

        if (arrayOfParam.length > 1 && arrayOfParam[1].length) {
            let arrayOfValues;
            if (arrayOfParam.length === 3) {
                const splitedValues = arrayOfParam[2].split(',').filter((value) => {
                    return !!value.length;
                });
                arrayOfValues = [`${arrayOfParam[1]}=${splitedValues}`];
            } else {
                arrayOfValues = arrayOfParam[1].split(',').filter((value) => {
                    return !!value.length;
                });
            }
            acc = {...acc, [arrayOfParam[0]]: arrayOfValues};
        }
        return acc;
    }, {});
};

export const findNameRelatedToValue = (array, value) => {
    const objectFounded = array.find((object) => {
        return object.value === value;
    });
    return !!objectFounded && objectFounded.name;
};

export const createDefaultFiltersObject = (arrayOfValuesFromUrl, filtersDataArray, defaultValue) => {
    if (!!arrayOfValuesFromUrl) {
        const defValue = arrayOfValuesFromUrl.map((value) => {
            const foundedName = findNameRelatedToValue(filtersDataArray, value);
            if (!!foundedName) {
                return {
                    name: foundedName,
                    value
                };
            }
        });
        if (!!defValue.length) {
            return defValue;
        }
    }
    return defaultValue;
};

const findObjectFromData = (value, data) => {
    return data.find((filterObject) => {
        return filterObject.value === value;
    });
};

export const createOptionsFromUrl = (filtersObject, filterData) => {
    const objectKeys = Object.keys(filtersObject);
    return objectKeys.reduce((acc, curr) => {
        if (!!filterData[curr]) {
            const knownOptions = filtersObject[curr].map((value) => {
                const foundedObject = findObjectFromData(value, filterData[curr]);
                if (!!foundedObject) {
                    return {name: foundedObject.name, value}
                } else {
                    return {name: 'unknown', value}
                }
            });
            acc = {
                ...acc,
                [curr]: knownOptions
            };
        } else {
            const unknownOptions = filtersObject[curr].map((value) => {
                return {name: 'unknown', value};
            });
            acc = {
                ...acc,
                [curr]: unknownOptions
            };
        }
        return acc;
    }, {});
};


