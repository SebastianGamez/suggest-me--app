// React
import React from 'react';

export const Book = ({title, gender, author, releaseDate, frontPage}) => {
  return (
    <li className='list__item--books'>
    
    <img alt={title} src={ frontPage } className='item__image'></img>

      <div className='item__book'>
          <p>Título: {title}</p>
          <p>Género: {gender}</p>
          <p>Autor: {author}</p>
          <p>Año de publicación: {releaseDate}</p>
      </div>

    </li>
    
  )
}
