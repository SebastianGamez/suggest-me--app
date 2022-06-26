// React
import React, { useState } from 'react';


export const Gender = ({title, value, setPleasures}) => {
   
  // Toggle config for select and unselect the gender that like the user
  const [selected, setSelected] = useState(false)

  return (
    <li className='list__gender'>
        
        <div 
          // Style based if it's select or unselct
          className={selected? 'gender__option gender__option--selected': 'gender__option'}
          
          // Toggle action
          onClick={() => {

            setSelected(!selected)
            setPleasures(pleasures => {

              if(pleasures.indexOf(value) !== -1){

                return pleasures.filter(pleasure => pleasure !== value)

              }else{
                return[...pleasures, value]
              }

            })

          }}
          >
            
            <span className={`option__image option__image--${value}`}></span>
            <p className='option__title--gender'>{title}</p>

        </div>
      
    </li>

  );
}
