// No li donem extensió .jsx perquè no és un functional component
import { getGifs } from '../../src/helpers/GetGifs';

describe('GetGifs helper', () => {

  test('Must return an array of gifs', async () => {
    const gifs = await getGifs('One Punch');

    expect(gifs.length).toBeGreaterThan(0);

    // Podem avaluar que es rebin elements amb una estructura concreta
    // sense especificar valors, només amb tipus de dades
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })

})