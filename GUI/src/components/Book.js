// React
import React from 'react';

export const Book = ({title, gender, author, release_date}) => {
  return (
    <li className='list__item--books'>
    
    <span className='item__image'></span>

      <div className='item__book'>
          <p>Título: {title}</p>
          <p>Género: {gender}</p>
          <p>Autor: {author}</p>
          <p>Año de publicación: {release_date}</p>
      </div>

    </li>
    
  )
}
