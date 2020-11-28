import { baseUrl } from '../config';

const request = async (url, options, headers) => {
    const defaultOptions = {
        ...options,
        headers: {
            'content-type': 'application/json',
            accept: 'application/json',
           ...headers
        },
    };
    const response = await fetch(`${baseUrl}${url}`, defaultOptions);
    if (response.status === 200) {
        return response;
    }
    return Promise.reject(response);
};

export default request;