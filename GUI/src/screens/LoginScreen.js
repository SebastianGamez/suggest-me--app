// React
import React from 'react';

// Components
import { Button } from '../components/Button';
import { Input } from '../components/Input';


export const LoginScreen = () => {
  return (
    <section className='root__login'>
        
        <div className='login__title'>
            
            <h2 className='title__title'>INICIAR SESIÓN</h2>

        </div>
        <div className='login__form'>
            
            <form className='form__form'>
                
                <Input name={'user'} type={'text'} placeholder={'USUARIO'} />
                <Input name={'password'} type={'password'} placeholder={'CONTRASEÑA'} />

            </form>
            <div className='form__button'>

              <Button value={'INICIAR SESIÓN'} />

            </div>

        </div>

    </section>

  )
}
