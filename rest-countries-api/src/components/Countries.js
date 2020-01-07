import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../services/restCountriesService';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getAllCountries()
            .then(countries => countries.map(c => {
                return {
                    numericCode: c.numericCode,
                    name: c.name,
                    capital: c.capital,
                    region: c.region,
                    subregion: c.subregion,
                    population: c.population,
                    borders: c.borders,
                    flag: c.flag,
                    regionalBlocs: c.regionalBlocs,
                    cioc: c.cioc
                };
            }))
            .then(setCountries);
    }, [countries]);

    const countryData = countries.map(c => (
        <div key={c.numericCode}>
            <h2>{c.name}</h2>
            <ul>
                <li>Capital: {c.capital}</li>
                <li>Region: {c.region}</li>
                <li>Population: {c.population}</li>
            </ul>
        </div>
    ));

    return (
        <div>
            <h1>Countries</h1>
            {countryData}
        </div>
    )
}

export default Countries;