import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'One Piece' ])

  const onAddCategory = (newCategory) => {
    const lowercaseCategories = categories.map( cat => cat.toLowerCase() );
    if (lowercaseCategories.includes(newCategory.toLowerCase())) return;

    // setCategories al venir d'un useState porta implicit
    // el valor anterior
    // setCategories( currentValue => { newValue, ...currentValue } )
    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory
        onNewValue={ newCategory => onAddCategory(newCategory) }
      />

      {
        categories.map(category => (
          <GifGrid key={ category } category={ category } />
        ))
      }
    </>
  )
}
