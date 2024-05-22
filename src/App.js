import React, { useState, useEffect } from 'react';
import AddBook from './AddBook';
import ViewBooks from './ViewBooks';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    console.log(newBook);
    if (newBook.title !== '') {
      setBooks([...books, newBook]);
    }
  };

  return (
    <div className='App'>
      <h1 id='book_head'>Book Management</h1>
      <AddBook addBook={addBook} />
      <ViewBooks books={books} />
    </div>
  );
};

export default App;