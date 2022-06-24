// React
import React, { useState } from 'react';

// React router
import { Link } from 'react-router-dom';


export const Header = () => {
  
  // Toggle setting for show the user options
  const [showUserOptions, setShowUserOptions] = useState(false);
  
  return (
    <header className='root__header'>

        <div className='header__title'>
        
        {/* Redirect to main screen*/}
        <Link to='/' style={{ textDecoration: 'none'}}>

          <h1 className='title__title--header'>SuggestMe</h1>

        </Link>

        </div>
        <div className='header__user'>
          
            <span 
              className='user__spam' 
              onClick={() => setShowUserOptions(!showUserOptions)}
            />
            <div className={showUserOptions ? 'user__options': 'user__options--disable'}>
              <p className='option__logout'>Cerrar sesión</p>
            </div>

        </div>


      </header>
  );
}
