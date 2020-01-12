export const mapCountry = country => {
    return {
        numericCode: country.numericCode,
        name: country.name,
        nativeName: country.nativeName,
        topLevelDomain: country.topLevelDomain,
        currencies: country.currencies,
        languages: country.languages,
        capital: country.capital,
        region: country.region,
        subregion: country.subregion,
        population: country.population,
        borders: country.borders,
        flag: country.flag,
        regionalBlocs: country.regionalBlocs,
        cioc: country.cioc
    }
};