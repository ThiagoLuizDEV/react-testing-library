import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemon } from '../pages';

test('testa se ta exibindo o texto No favorite pokemon found', () => {
  renderWithRouter(<FavoritePokemon />);
  const noFavorite = screen.getByText('No favorite Pokémon found');
  expect(noFavorite).toBeInTheDocument();
});
