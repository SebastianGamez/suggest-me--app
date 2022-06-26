// React
import React, { useState } from 'react';

// Components
import { Button } from '../components/Button';
import { Gender } from '../components/Gender';

// React router
import { Redirect } from 'react-router-dom';

export const PleasuresScreen = () => {
  
  const [pleasures, setPleasures] = useState([]);
  const [pleasuresReady, setPleasasuresReady] = useState(false);


  if(!sessionStorage.getItem('logged')) return <Redirect to='/register' />
  if(pleasuresReady) return <Redirect to='/suggest' />

  const handleSubmit = () => {

    const data = {

      id: parseInt(sessionStorage.getItem('id')),
      pleasures: pleasures

    }

    fetch('http://localhost:8000/api/pleasures', { 
      method: 'PUT',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if(data.result.added){
        alert(data.result.message)
        sessionStorage.setItem('pleasures', data.result.pleasures)
        setPleasasuresReady(true)
      }else{
        alert('Occurred an error')
      }
    });
    
  }

  return (
    
    <section className='root__home'>
        
        <div className='pleasures__title'>

          <h1 className='title__title'>SELECCIONA TUS GÉNEROS FAVORITOS</h1>

        </div>

        <div className='pleasures__genders'>
          
          <ul className='genders__list'>
                          
              <Gender title={'Ciencia'} value={'science'} setPleasures={setPleasures}/>
              <Gender title={'Ciencia ficción'} value={'science_fiction'} setPleasures={setPleasures}/>
              <Gender title={'Filosofía'} value={'philosophy'} setPleasures={setPleasures}/>
              <Gender title={'Historia'} value={'history'} setPleasures={setPleasures}/>
              <Gender title={'Literatura'} value={'literature'} setPleasures={setPleasures} />
              <Gender title={'Poesía'} value={'poetry'} setPleasures={setPleasures}/>

          </ul>

        </div>
        <div className='pleasures__register'>
          
          <Button value={'SIGUIENTE'} onClick={handleSubmit} />

        </div>

    </section>

  );
}
