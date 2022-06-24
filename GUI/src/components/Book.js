// React
import React from 'react';

export const Book = () => {
  return (
    <li className='list__item--books'>
    
    <span className='item__image'></span>

      <div className='item__book'>
          <p className='book__title'>Título:</p>
          <p className='book__gender'>Género:</p>
          <p className='book__author'>Autor:</p>
          <p className='book__compatibility'>Compatibilidad:</p>
      </div>

    </li>
    
  )
}
