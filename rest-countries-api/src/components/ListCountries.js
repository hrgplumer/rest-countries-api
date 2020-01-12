import React, { useEffect, useState } from 'react';
import { getAllCountries } from '../services/restCountriesService';
import { mapCountry } from '../helpers/countryHelper';
import Country from './Country';
import '../assets/listCountries.scss';

const ListCountries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getAllCountries()
            .then(countries => countries.map(c => mapCountry(c)))
            .then(setCountries);
    }, []);

    const countryComponents = countries.map(c => (
        <Country key={c.numericCode} countryObject={c} />
    ));

    return (
        <section className="countries-list">
            {countryComponents}
        </section>
    )
}

export default ListCountries;