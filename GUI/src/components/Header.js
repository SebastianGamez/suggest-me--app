// React
import React, { useState, useContext } from 'react';

// React router
import { Link } from 'react-router-dom';

// Context
import { UserContext } from '../contexts/UserContext';


export const Header = () => {
  
  const { user, setUser } = useContext(UserContext)

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
          <p 
              className={!!user.logged ? 'option__option--user': 'user__options--disable'}
              onClick={() => {
                
                setUser({...user, pleasures: null})
                setShowUserOptions(!showUserOptions)

              }}
            >
              Selecciona tus gustos
            </p>
            <p 
              className='option__option--user'
              onClick={() => {

                if(!!user.logged) setUser({logged: null, id: null, pleasures: null})
                setShowUserOptions(!showUserOptions)

              }}
            >
              {!!user.logged ? 'Cerrar sesión':  <Link style={{ color:'black', textDecoration: 'none'}} to='/login'>Iniciar sesión</Link>}
            </p>
          </div>

        </div>

      </header>
  );
}
