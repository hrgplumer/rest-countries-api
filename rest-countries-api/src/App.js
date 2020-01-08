import React from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import ListCountries from './components/ListCountries';
import Header from './Header';

function App() {
  return (
    <div className="container">
      <Header mode="dark" />
      <section className="countries-list">
        <ListCountries />
      </section>
    </div>
  );
}

export default App;
