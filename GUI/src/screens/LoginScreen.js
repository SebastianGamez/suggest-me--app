// React
import React, { useState, useContext } from 'react';

// React router
import { Redirect } from 'react-router-dom';

// Components
import { Button } from '../components/Button';
import { Input } from '../components/Input';

// Contexts
import { UserContext } from '../contexts/UserContext';

// Sweet alert
import swal from 'sweetalert';


export const LoginScreen = () => {
  
  //Verify and redirect if the user completed the register
  const {user, setUser} = useContext(UserContext);

  //Save the input data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {

    const data = {

      username: username,
      password: password

    }

    fetch('http://localhost:8000/api/login', { 
      method: 'POST',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(({result}) => {
      if(!result.logged) return swal('Hubo un error :(', result.message, 'error');
      
      swal('¡Inicio de sesión completo!', result.message, 'success')
      setUser({
        logged: true,
        id: result.data.id,
        pleasures: result.data.pleasures
      });

    });
    
  }

  if (user.logged) return <Redirect to='/pleasures' />;
  
  return (
    <section className='root__login'>
        
        <div className='login__title'>
            
            <h2 className='title__title'>INICIAR SESIÓN</h2>

        </div>
        <div className='login__form'>
            
            <form className='form__form'>
                
              <Input
                name={'username'}
                onChange={ e => setUsername(e.target.value)}
                placeholder={'USUARIO'}
                type={'text'}
                value={username}
              />
              <Input
                name={'password'}
                onChange={ e => setPassword(e.target.value)}
                placeholder={'CONTRASEÑA'}
                type={'password'}
                value={password}
              />

            </form>
            <div className='form__button'>

              <Button onClick={handleLogin} value={'INICIAR SESIÓN'} />

            </div>

        </div>

    </section>

  )
}
