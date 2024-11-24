import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('AddCategory component', () => {

  const inputValue = 'Luffy';

  test('Must update input value when user enters data', () => {
    render(<AddCategory onNewValue={ () => {} } />);
    // Per obtenir inputs hem de buscar per 'textbox'
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: inputValue } } );

    expect(input.value).toBe(inputValue);
  })

  test('Must call onNewValue when input has value', () => {
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={ onNewValue } />);
    const input = screen.getByRole('textbox');
    // Per poder obtenir l'element form ha de tenir un 'aria-label'
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewValue).toHaveBeenCalled();
    expect(onNewValue).toHaveBeenCalledTimes(1);
    expect(onNewValue).toHaveBeenCalledWith(inputValue);
  })

  test('Must not call onNewValue if input is empty', () => {
    const onNewValue = jest.fn();
    render(<AddCategory onNewValue={ onNewValue } />);
    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewValue).not.toHaveBeenCalled();
  })

})