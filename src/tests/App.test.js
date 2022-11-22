import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

const { screen } = require('@testing-library/react');

test('testa se ta aparecendo os links na tela', () => {
  renderWithRouter(<App />);
  const HomeLink = screen.getByRole('link', {
    name: /home/i,
  });
  const AboutLink = screen.getByRole('link', {
    name: /about/i,
  });
  const FavoritesLink = screen.getByRole('link', {
    name: /Favorite Pokémon/i,
  });
  expect(HomeLink).toBeInTheDocument();
  expect(AboutLink).toBeInTheDocument();
  expect(FavoritesLink).toBeInTheDocument();
});
test('testa o home', () => {
  const { history } = renderWithRouter(<App />);
  const HomeLink = screen.getByRole('link', {
    name: /home/i,
  });

  userEvent.click(HomeLink);

  expect(history.location.pathname).toBe('/');
});
test('testa o about', () => {
  const { history } = renderWithRouter(<App />);
  const AboutLink = screen.getByRole('link', {
    name: /About/i,
  });

  userEvent.click(AboutLink);

  expect(history.location.pathname).toBe('/about');
});
test('testa o favorites', () => {
  const { history } = renderWithRouter(<App />);
  const FavoritesLink = screen.getByRole('link', {
    name: /Favorite Pokémon/i,
  });

  userEvent.click(FavoritesLink);

  expect(history.location.pathname).toBe('/favorites');
});
test('testa a pagina Not Found', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('HEHEHE');
  });
  const imagePikachu = screen.getByRole('img', {
    name: /pikachu crying because the page requested was not found/i,
  });
  expect(imagePikachu).toBeInTheDocument();
});
