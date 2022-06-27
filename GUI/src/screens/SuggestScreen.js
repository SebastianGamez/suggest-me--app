// React
import React, { useState, useEffect, useContext } from 'react';

// React router
import { Redirect } from 'react-router-dom';

// Components
import { Book } from '../components/Book';

//Context
import { UserContext } from '../contexts/UserContext';

export const SuggestScreen = () => {

    const { user } = useContext(UserContext);

    const [books, setBooks] = useState([]);

    useEffect(() => {
      
        fetch(`http://localhost:8000/api/books/${user.pleasures}`, { 
        })
        .then(response => response.json())
        .then( ({result}) => setBooks(result.books));

    }, [user.pleasures])
  
    if(!user.logged) return <Redirect to='/register' />

    if(user.pleasures === null) return <Redirect to='/pleasures' />

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
                            releaseDate={book[3]}
                            frontPage={book[5]}
                            />

                    })}
                </ul>
            </div>

        </section>
    );

}
