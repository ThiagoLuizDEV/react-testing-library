import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testa o card', () => {
  renderWithRouter(<App />);

  const name = screen.getByText(/Pikachu/i);
  const type = screen.getByTestId('pokemon-type');
  const Average = screen.getByText(/Average weight: 6.0 kg/i);
  const image = screen.getByRole('img', { name: /pikachu/i });

  expect(name).toBeInTheDocument();
  expect(type).toHaveTextContent('Electric');
  expect(Average).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
});

test('testa o link more details', () => {
  const { history } = renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  expect(history.location.pathname).toBe('/pokemon/25');
});

test('testa de existe o icone de estrela', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  const check = screen.getByText(/Pokémon favoritado?/i);
  userEvent.click(check);
  const marked = screen.getByRole('img', { name: /pikachu is marked as favorite/i });

  expect(marked).toBeInTheDocument();
  expect(marked).toHaveAttribute('src', '/star-icon.svg');
});
