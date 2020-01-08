import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../services/restCountriesService';
import Country from './Country';

const ListCountries = () => {
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

    const countryComponents = countries.map(c => (
        <Country countryObject={c} />
    ));

    return (
        <section className="countries-list">
            {countryComponents}
        </section>
    )
}

export default ListCountries;