// React
import React from 'react';

export const Input = ({name, placeholder, onChange, type, value}) => {
  
    return (
    <input
        autoComplete={'off'}  
        className='input__input'
        name={name} 
        onChange={onChange}   
        placeholder={placeholder}
        type={type}
        value={value}
    />
  );

}
