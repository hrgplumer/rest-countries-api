import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './assets/App.scss';
import ListCountries from './components/ListCountries';
import Header from './Header';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <>
      <Header mode="dark" />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <ListCountries />
          </Route>
          <Route path="/country/:countryId">
            <CountryDetail />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
