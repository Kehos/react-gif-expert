import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/UseFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

  // Custom hook useFetchGifs()
  // Podem ficar dins un custom hook tota la lògica de useState o useEffect
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      {
        // En comptes de fer un condicional ternari fem això si no tenim
        // opció de "else"
        isLoading && <h2>Cargando...</h2>
      }

      <div className='card-grid'>
        {
          images.map((image) => (
            <GifItem
              key={ image.id }
              // Amb el property spread podem passar tots els camps d'un element
              // sense haver de passar-los per seaparat, com en aquest cas hauria
              // de ser "title={ image.title } url={ image.url }"
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
