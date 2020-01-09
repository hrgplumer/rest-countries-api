import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryId } = useParams();
    return (
        <div>
            {countryId}
        </div>
    );
}

export default CountryDetail;