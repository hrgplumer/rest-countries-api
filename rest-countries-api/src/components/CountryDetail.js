import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllCountries } from '../services/restCountriesService';
import { mapCountry } from '../helpers/countryHelper';
import '../assets/countryDetail.scss';

const CountryDetail = () => {
    const { countryId } = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        console.log('in useEffect');
        getAllCountries()
            .then(countries => countries.map(c => mapCountry(c)))
            .then(countries => countries.filter(c => c.numericCode === countryId).shift())
            .then(setCountry);
    }, [countryId]);

    const mapNameAndJoin = array => array.map(x => x.name).join(', ');

    return (
        <>
            <div className="flag-cover" style={{ backgroundImage: `url(${country.flag})` }}></div>
            <div className="country-data">
                <h3>{country.name}</h3>
                <div className="country-data-detail">
                    <ul>
                        <li>
                            <strong>Native Name:</strong> {country.nativeName}
                        </li>
                        <li>
                            <strong>Population:</strong> {country.population ? country.population.toLocaleString() : ''}
                        </li>
                        <li>
                            <strong>Region:</strong> {country.region}
                        </li>
                        <li>
                            <strong>Sub Region:</strong> {country.subRegion}
                        </li>
                        <li>
                            <strong>Capital:</strong> {country.capital}
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>Top Level Domain:</strong> {country.topLevelDomain}
                        </li>
                        <li>
                            <strong>Currencies:</strong> {country.currencies ? mapNameAndJoin(country.currencies) : ''}
                        </li>
                        <li>
                            <strong>Languages:</strong> {country.languages ? mapNameAndJoin(country.languages) : ''}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CountryDetail;