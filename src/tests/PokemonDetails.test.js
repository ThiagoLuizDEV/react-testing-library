import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testa o <name> Details', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  const details = screen.getByRole('heading', { name: /pikachu details/i });

  expect(details).toBeInTheDocument();
});
test('testa o titulo summary', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  const title = screen.getByRole('heading', { name: /summary/i });

  expect(title).toBeInTheDocument();
});
test('testa o paragrafo do sumary', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  const paragraph = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);

  expect(paragraph).toBeInTheDocument();
});
test('testa o titulo da localização', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  const title = screen.getByRole('heading', { name: /game locations of pikachu/i });

  expect(title).toBeInTheDocument();
});
test('testa as imagens das localizações', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);
  const image1 = screen.getAllByRole('img', {
    name: /Pikachu location/i,
  });
  expect(image1[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(image1[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
});
test('se é exibido um texto "pokemon favoritado?"', () => {
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  expect(detailsLink).toBeInTheDocument();
  userEvent.click(detailsLink);

  const pokemon = screen.getByText(/pokémon favoritado\?/i);
  expect(pokemon).toBeInTheDocument();
});
