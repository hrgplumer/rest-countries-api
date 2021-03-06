import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/country.scss';

const Country = ({ countryObject }) => {
    const [country] = useState(countryObject);
    return (
        <Link to={`/country/${country.numericCode}`}>
            <div className="country">
                <div className="flag-cover" style={{ backgroundImage: `url(${country.flag})` }}></div>
                <div className="country-detail">
                    <h2>{country.name}</h2>
                    <ul className="country-specs">
                        <li><strong>Population:</strong> {country.population.toLocaleString()}</li>
                        <li><strong>Region:</strong> {country.region}</li>
                        <li><strong>Capital:</strong> {country.capital}</li>
                    </ul>
                </div>
            </div>
        </Link>
    );
}

export default Country;