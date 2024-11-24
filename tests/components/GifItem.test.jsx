import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('GifItem component', () => {
  const mockTitle = 'Gif title';
  const mockUrl = 'http://url';

  test('Must match with snapshot', () => {
    const { container } = render(<GifItem title={ mockTitle } url={ mockUrl } />);

    expect(container).toMatchSnapshot();
  })

  test('Must show image with URL and ALT attributes', () => {
    render(<GifItem title={ mockTitle } url={ mockUrl } />);
    const { alt, src } = screen.getByRole('img');

    expect(alt).toBe(mockTitle);
    expect(src).toBe(`${mockUrl}/`);
  })

  test('Must show title into component', () => {
    render(<GifItem title={ mockTitle } url={ mockUrl } />);

    expect(screen.getByText(mockTitle)).toBeTruthy();
  })
})