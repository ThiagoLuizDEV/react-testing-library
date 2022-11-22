import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('testa o titulo da pagina notfound ', () => {
  renderWithRouter(<NotFound />);
  const title = screen.getByRole('heading', {
    name: /Page requested not found/i,
  });

  expect(title).toBeInTheDocument();
});
test('Testa a imagem', () => {
  renderWithRouter(<NotFound />);

  const imagePokedex = screen.getByRole('img', {
    name: /pikachu crying because the page requested was not found/i,
  });

  expect(imagePokedex).toBeInTheDocument();
  expect(imagePokedex).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
