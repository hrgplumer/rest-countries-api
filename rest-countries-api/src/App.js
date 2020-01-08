import React from 'react';
import './assets/App.scss';
import ListCountries from './components/ListCountries';
import Header from './Header';

function App() {
  return (
    <>
      <Header mode="dark" />
      <div className="container">
        <ListCountries />
      </div>
    </>
  );
}

export default App;
