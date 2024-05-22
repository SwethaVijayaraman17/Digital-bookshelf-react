import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAddBook = () => {
    addBook({ title });
    setTitle('');
  };

  return (
    <div id='addBook'>
      <input type="text" id='book_name' name='book_name' value={title} onChange={handleInputChange} />
      <button id='addBtn' onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default AddBook;