// React
import React from 'react';

export const Button = ({onClick, value}) => {
  
    return (
    
        <button onClick={onClick} className='button__button'>{value}</button>

    );
}
