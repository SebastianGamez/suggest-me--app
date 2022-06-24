// React
import React from 'react';

// Components
import { Button } from '../components/Button';
import { Gender } from '../components/Gender';

// React router
import { Link } from 'react-router-dom';

export const PleasuresScreen = () => {
  return (
    
    <section className='root__home'>
        
        <div className='pleasures__title'>

          <h1 className='title__title'>SELECCIONA TUS GÉNEROS FAVORITOS</h1>

        </div>

        <div className='pleasures__genders'>
          
          <ul className='genders__list'>
                          
              <Gender title={'Ciencia'} image={'science'} />
              <Gender title={'Ciencia ficción'} image={'science_fiction'} />
              <Gender title={'Filosofía'} image={'philosophy'} />
              <Gender title={'Historia'} image={'history'} />
              <Gender title={'Literatura'} image={'literature'} />
              <Gender title={'Poesía'} image={'poetry'} />

          </ul>

        </div>
        <div className='pleasures__register'>
          
          <Link to='/suggest'> <Button value={'SIGUIENTE'} /> </Link> 

        </div>

    </section>

  );
}
