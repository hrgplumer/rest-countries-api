import { REST_COUNTRIES_API, endpointEnum } from '../config/constants';

const apiUrlReducer = (api, endpoint, options = '') => {
    switch (endpoint) {
        case 'ALL':
            return `${api}${endpointEnum[endpoint]}`;
        case 'NAME':
            return `${api}${endpointEnum[endpoint]}/${options}`;
        case 'REGION':
            return `${api}${endpointEnum[endpoint]}/${options}`;
        default:
            throw new Error('Your API endpoint did not match any known endpoints.');
    }
}

export const getAllCountries = async (apiUrl = REST_COUNTRIES_API) => {
    try {
        const url = apiUrlReducer(apiUrl, 'ALL');
        const countriesBlob = await fetch(url, {
            method: 'GET'
        });
        const data = await countriesBlob.json();
        return data;
    } catch (error) {
        console.trace(error);
        return [];
    }
}