import React, { useState } from 'react';
import '../assets/country.scss';

const Country = ({ countryObject }) => {
    const [country, setCountry] = useState(countryObject);

    return (
        <div key={country.numericCode}>
            <h2>{country.name}</h2>
            <ul>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Population: {country.population}</li>
            </ul>
        </div>
    );
}

export default Country;