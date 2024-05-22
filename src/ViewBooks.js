import React from 'react';

const ViewBooks = ({ books }) => {
  return (
    books.length > 0 &&
    <div id='viewBooks'>
      <>
        <h2>Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      </>
    </div>
  );
};

export default ViewBooks;