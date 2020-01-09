import React, { useState } from 'react';
import '../assets/country.scss';

const Country = ({ countryObject }) => {
    const [country] = useState(countryObject);
    return (
        <div className="country">
            <h2>{country.name}</h2>
            <div className="flag-cover" style={{ backgroundImage: `url(${country.flag})` }}></div>
            <ul className="country-specs">
                <li><strong>Population:</strong> {country.population}</li>
                <li><strong>Region:</strong> {country.region}</li>
                <li><strong>Capital:</strong> {country.capital}</li>
            </ul>
        </div>
    );
}

export default Country;