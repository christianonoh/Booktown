import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [bookdata] = useState([
    {
      title: 'Bolanle',
      id: 1,
    },
    {
      title: 'The Farm',
      id: 2,
    },
    {
      title: 'The Farm',
      id: 2,
    },
  ]);
  return (
    <div className="booklist-container">
      <h1>Books</h1>
      <ul>
        {
        bookdata.map((book) => <Book key={book.id} book={book} />)
      }
      </ul>
    </div>
  );
};

export default BookList;
