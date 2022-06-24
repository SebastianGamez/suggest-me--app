// React
import React from 'react';

// Components
import { Book } from '../components/Book';

export const SuggestScreen = () => {
  
    return (
        <section className='root__suggest'>

            <div className='suggest__title'>

                <h2 className='title__title'>DEBERÍAS LEER ESTO ;)</h2>

            </div>
            <div className='suggest__books'>
                <ul className='books__list'>
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </ul>
            </div>

        </section>
    );

}
