// React
import React from 'react';

// Components
import { Button } from '../components/Button';
import { Input } from '../components/Input';

// React router
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  
  return (
    
    <section className='root__register'>
        
        <div className='register__title'>
            
            <h2 className='title__title'>CREAR CUENTA</h2>

        </div>
        <div className='register__form'>
            
            <form className='form__form'>
                
                <Input name={'user'} type={'text'} placeholder={'USUARIO'} />
                <Input name={'email'} type={'text'} placeholder={'CORREO ELECTRÓNICO'} />
                <Input name={'password'} type={'password'} placeholder={'CONTRASEÑA'} />

            </form>
            <div className='form__button'>

              <Button value={'REGISTRARSE'} />

            </div>
            <div className='form__conditions'>
              
              <p className='conditions__conditions--form'>Al registrarse, acepta los <Link href=''>Términos de servicio</Link> y la <Link to=''>política de privacidad</Link>.</p>

            </div>
            <div className='form__login'>

              <p className='login__login--register'>Si ya tienes cuenta inicia sesión <Link to='/login'>aquí</Link>.</p>

            </div>

        </div>

    </section>
  );

}
