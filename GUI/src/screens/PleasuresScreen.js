// React
import React, { useState, useContext } from 'react';

// Components
import { Button } from '../components/Button';
import { Gender } from '../components/Gender';

// React router
import { Redirect } from 'react-router-dom';

// Context
import { UserContext } from '../contexts/UserContext';

export const PleasuresScreen = () => {

  //Verify and redirect if the user completed the register
  const { user, setUser } = useContext(UserContext);
  
  const [pleasures, setPleasures] = useState([]);


  if(!user.logged) return <Redirect to='/register' />;

  if(!!user.pleasures) return <Redirect to='/suggest' />;


  const handleSubmit = () => {

    const data = {

      id: user.id,
      pleasures: pleasures

    }

    fetch('http://localhost:8000/api/pleasures', { 
      method: 'PUT',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then( ({result}) => {
      
      if(!result.added) return alert('Occurred an error');
      alert(result.message);
      setUser({ user, pleasures: result.pleasures});

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
