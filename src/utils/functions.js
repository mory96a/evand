import data from "../Components/FiltersForm/data";

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

export const parseQueryParams = (params) => {
    const queryString = decodeURI(params.slice(1));
    const paramsArray = splitter(queryString, '&');
    return paramsArray.reduce((acc, curr) => {
        if (curr.length) {
            const itemArray = splitter(curr, '=');
            const sortsToArray = splitter(itemArray[1], ',');
            acc = {
                ...acc,
                [itemArray[0]]: sortsToArray
            };
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

export const createDefaultFiltersObject = (arrayOfValues,filtersDataArray) => {
    return arrayOfValues.map((value) => {
        const foundedName = findNameRelatedToValue(filtersDataArray, value);
        if (!!foundedName) {
            return {
                name: foundedName,
                value: decodeURI(value)
            };
        }
    });
};
