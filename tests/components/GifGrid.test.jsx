import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/UseFetchGifs';

// Fem un mock complet de tot el hook
jest.mock('../../src/hooks/UseFetchGifs');

describe('GifGrid component', () => {

  const category = 'One Piece';

  test('Must show loading on component load', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });
    render(<GifGrid category={ category } />);

    expect(screen.getByText('Cargando...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });

  test('Must show items when images are loaded', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Luffy',
        url: 'http://luffy.gif'
      },
      {
        id: '123',
        title: 'Gear 2',
        url: 'http://luffy-2.gif'
      }
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    });
    render(<GifGrid category={ category } />);

    expect(screen.getAllByRole('img').length).toBe(2);
  })

})