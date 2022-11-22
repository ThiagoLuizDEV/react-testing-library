import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

const { screen } = require('@testing-library/react');

test('Testa o titulo, paragrafos', () => {
  renderWithRouter(<About />);
  const title = screen.getByRole('heading', {
    name: /About Pokédex/i,
  });

  expect(title).toBeInTheDocument();
});
test('Testa o  paragrafo1', () => {
  renderWithRouter(<About />);

  const paragraf1 = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);

  expect(paragraf1).toBeInTheDocument();
});
test('Testa o paragrafo2', () => {
  renderWithRouter(<About />);

  const paragraf2 = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them/i);

  expect(paragraf2).toBeInTheDocument();
});
test('Testa a imagem', () => {
  renderWithRouter(<About />);

  const imagePokedex = screen.getByRole('img', {
    name: /pokédex/i,
  });

  expect(imagePokedex).toBeInTheDocument();
  expect(imagePokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
