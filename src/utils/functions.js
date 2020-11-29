export const optionObjectToArray = (object) => {
    const objectArray = Object.entries(object);
    console.log(objectArray)
    return objectArray.reduce((acc, curr) => {
        if (curr[1].length !== 0) {
            acc.push(`${curr[0]}=${curr[1]}`);
        }
        return acc;
    }, []);
};

export const optionsToQueryString = (options) => {
    const arrayOfOptions = optionObjectToArray(options);
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
