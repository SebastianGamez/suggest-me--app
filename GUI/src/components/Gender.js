// React
import React, { useState } from 'react';


export const Gender = ({title, image}) => {
   
  // Toggle config for select and unselect the gender that like the user
  const [selected, setSelected] = useState(false)

  return (
    <li className='list__gender'>
        
        <div 
          // Style based if it's select or unselct
          className={selected? 'gender__option gender__option--selected': 'gender__option'}
          
          // Toggle action
          onClick={() => setSelected(!selected)}
        >
            
            <span className={`option__image option__image--${image}`}></span>
            <p className='option__title--gender'>{title}</p>

        </div>
      
    </li>

  );
}
