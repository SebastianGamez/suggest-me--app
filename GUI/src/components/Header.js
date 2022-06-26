// React
import React from 'react';

// React router
import { Link } from 'react-router-dom';


export const Header = () => {
  
  // Toggle setting for show the user options
  
  return (
    <header className='root__header'>

        <div className='header__title'>
        
        {/* Redirect to main screen*/}
        <Link to='/' style={{ textDecoration: 'none'}}>

          <h1 className='title__title--header'>SuggestMe</h1>

        </Link>

        </div>

      </header>
  );
}
