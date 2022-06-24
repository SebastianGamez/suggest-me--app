// React
import React from 'react';

export const Input = ({name, type, placeholder}) => {
  
    return (
    <input
        name={name}    
        type={type}
        placeholder={placeholder}
        className='input__input'
    />
  );

}
