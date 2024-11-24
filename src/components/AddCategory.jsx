import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewValue }) => {

  const [inputValue, setInputValue] = useState('')

  // Rebem un 'event' i desestructurem per obtenir només 'target'
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return
    onNewValue(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit } aria-label='gif-form'>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired
}
