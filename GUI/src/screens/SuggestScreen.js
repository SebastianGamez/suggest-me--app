// React
import React, { useState, useEffect } from 'react';

// React router
import { Redirect } from 'react-router-dom';

// Components
import { Book } from '../components/Book';

export const SuggestScreen = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
      
        fetch(`http://localhost:8000/api/books/${sessionStorage.getItem('pleasures')}`, { 
        })
        .then(response => response.json())
        .then(data => {
            setBooks(data.result.books)
        });

    }, [])
  
    if(!sessionStorage.getItem('logged')) return <Redirect to='/register' />

    if(sessionStorage.getItem('pleasures') === 'null') return <Redirect to='/pleasures' />

    return (
        <section className='root__suggest'>

            <div className='suggest__title'>

                <h2 className='title__title'>DEBERÍAS LEER ESTO ;)</h2>

            </div>
            <div className='suggest__books'>
                <ul className='books__list'>
                    
                    {books.map(book => {

                        return <
                            Book
                            title={book[2]}
                            gender={book[4]}
                            author={book[1]}
                            release_date={book[3]}
                            />

                    })}
                </ul>
            </div>

        </section>
    );

}
