import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  // useEffect espera una funció callback i una llista de dependències
  // Si les dependències estan buides només s'executarà al construir el component
  useEffect( () => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }

}
