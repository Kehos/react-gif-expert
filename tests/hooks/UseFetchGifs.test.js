import { useFetchGifs } from '../../src/hooks/UseFetchGifs';
import { renderHook, waitFor } from '@testing-library/react';

describe('UseFetchGifs hook', () => {

  test('Must return initial state', () => {
    // Hem de cridar a un hook des de dins un functional component de React,
    // podem utilitzar 'renderHook'
    const { result } = renderHook(() => useFetchGifs('One Piece'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  })

  test('Must return an array of images and isLoading to false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Piece'));
    // Espera a que el resultat sigui true
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })

})