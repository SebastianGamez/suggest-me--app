// React
import React, { useState } from 'react';

// React router
import { Redirect } from 'react-router-dom';

// Components
import { Button } from '../components/Button';
import { Input } from '../components/Input';


export const LoginScreen = () => {
  
  //Verify and redirect if the user completed the register
  const [logged, setLogged] = useState(sessionStorage.getItem('logged'));
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
    .then(data => {
      if(data.result.logged){
        alert(data.result.message)
        sessionStorage.setItem("logged", true);
        sessionStorage.setItem("id", data.result.data.id);
        sessionStorage.setItem("pleasures", data.result.data.pleasures);
        setLogged(true)
      }else{  
        alert(data.result.message)
      }
    });
    
  }

  if (logged) return (<Redirect to='/pleasures' />);
  
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
