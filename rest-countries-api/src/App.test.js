import React from 'react';
import { render, act, cleanup } from '@testing-library/react';
import App from './App';
import { getAllCountries } from './services/restCountriesService';

afterEach(cleanup);

test('renders Countries component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Countries/i);
  expect(linkElement).toBeInTheDocument();
});

test('api get all countries', async () => {
  const countries = await getAllCountries();
  expect(countries).toBeTruthy();
  expect(countries).toHaveLength(250);
});
