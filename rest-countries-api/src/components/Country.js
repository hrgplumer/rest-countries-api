import React, { useState } from 'react';

const Country = ({ countryObject }) => {
    const [country, setCountry] = useState(countryObject);

    return (
        <div key={country.numericCode}>
            <h2>{country.name}</h2>
            <ul>
                <li>Capital: {country.capital}</li>
                <li>Region: {country.region}</li>
                <li>Population: {country.population}</li>
                <li>Penis juice</li>
            </ul>
        </div>
    );
}

export default Country;