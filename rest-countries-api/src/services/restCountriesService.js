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
    return getApiData(apiUrl, 'ALL');
}

export const getAllRegions = async (apiUrl = REST_COUNTRIES_API) => {
    return getApiData(apiUrl, 'REGION');
}

const getApiData = async (apiUrl = REST_COUNTRIES_API, endpoint) => {
    try {
        const url = apiUrlReducer(apiUrl, endpoint);
        const dataBlob = await fetch(url, {
            method: 'GET'
        });
        const data = await dataBlob.json();
        return data;
    } catch (error) {
        console.trace(error);
        return [];
    }
}