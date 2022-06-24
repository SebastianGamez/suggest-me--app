// React
import React from 'react'

// React Router
import { Link } from 'react-router-dom';

// Components
import { Button } from '../components/Button'

export const HomeScreen = () => {
  return (
    <section className='root__home'>

        <div className='home__title'>
            
            <h2 className='title__title'>¡ES HORA DE DAR INICIO A ESTA AVENTURA!</h2>

        </div>
        <div className='home__button'>
            <Link to='/register'><Button value={'COMENZAR'} /></Link>
        </div>

    </section>
  )
}
