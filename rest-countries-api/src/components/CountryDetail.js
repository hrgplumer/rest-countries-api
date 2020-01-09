import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryCode } = useParams();
    return (
        <div>
            country detail
        </div>
    );
}

export default CountryDetail;