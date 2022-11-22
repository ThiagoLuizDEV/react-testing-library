import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('testa o titulo', () => {
  renderWithRouter(<App />);
  const title = screen.getByRole('heading', {
    name: /Encountered Pokémon/i,
  });
  expect(title).toBeInTheDocument();
});

test('testa se aparece só um pokemon', () => {
  renderWithRouter(<App />);

  const name = screen.getAllByTestId('pokemon-name');
  expect(name[0]).toBeInTheDocument();
});
test('testando tipo do pokemon', () => {
  renderWithRouter(<App />);
  const bug = screen.getByRole('button', { name: /bug/i });

  userEvent.click(bug);
  const caterpie = screen.getByText('Caterpie');

  expect(caterpie).toBeInTheDocument();
});

test('testando os botoes', () => {
  renderWithRouter(<App />);
  const AllPokemon = screen.getByRole('button', {
    name: /all/i,
  });
  userEvent.click(AllPokemon);
  const typesButtons = screen.getAllByTestId('pokemon-type-button');
  expect(AllPokemon).toBeInTheDocument();
  expect(typesButtons[0]).toBeInTheDocument();
});

test('testando proximo pokemon', () => {
  renderWithRouter(<App />);
  const proximo = screen.getByRole('button', {
    name: /próximo pokémon/i,
  });
  userEvent.click(proximo);
  const charmander = screen.getByText('Charmander');
  expect(charmander).toBeInTheDocument();
});
