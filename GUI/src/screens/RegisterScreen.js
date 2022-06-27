// React
import React, { useState } from 'react';

// Components
import { Button } from '../components/Button';
import { Input } from '../components/Input';

// React router
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

// Sweet alert
import swal from 'sweetalert';


export const RegisterScreen = () => {

  //Verify and redirect if the user completed the register
  const [regitered, setRegitered] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  if(sessionStorage.getItem('logged')) return <Redirect to='/' />;
  
  if (regitered) return (<Redirect to='/login' />);


  const handleRegister = e => {

    e.preventDefault();

    const data = {

      username: username,
      email: email,
      password: password

    }

    fetch('http://localhost:8000/api/register', { 
      method: 'POST',
      cache: 'no-cache',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then( ({result}) => {
      if(result.registered){
        swal('¡Registro completo!', result.message, 'success')
        setRegitered(true)
      }else{
        swal('Hubo un error :(', result.message, 'error')
      }
    });
    
  }
  
  return (
    
    <section className='root__register'>
        
        <div className='register__title'>
            
            <h2 className='title__title'>CREAR CUENTA</h2>

        </div>
        <div className='register__form'>
            
            <form className='form__form'>
                
                <Input
                  name={'username'}
                  onChange={ e => setUsername(e.target.value)}
                  placeholder={'USUARIO'}
                  type={'text'}
                  value={username}
                />
                <Input
                  name={'email'}
                  onChange={ e => setEmail(e.target.value)}
                  placeholder={'CORREO ELECTRONICO'}
                  type={'text'}
                  value={email}
                />
                <Input
                  name={'password'}
                  onChange={ e => setPassword(e.target.value)}
                  placeholder={'CONTRASEÑA'}
                  type={'password'}
                  value={password}
                />
                <div className='form__button'>

                  <Button onClick={handleRegister} value={'REGISTRARSE'} />

                </div>

            </form>
            <div className='form__conditions'>
              
              <p className='conditions__conditions--form'>Al registrarse, acepta los <Link to='#'>Términos de servicio</Link> y la <Link to='#'>política de privacidad</Link>.</p>

            </div>
            <div className='form__login'>

              <p className='login__login--register'>Si ya tienes cuenta inicia sesión <Link to='/login'>aquí</Link>.</p>

            </div>

        </div>

    </section>
  );

}
