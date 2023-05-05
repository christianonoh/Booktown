/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [bookdata, setBookdata] = useState([
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
    <ul className="booklist-container">
      <h1>Books</h1>
      {
        bookdata.map((book) => <Book key={book.id} book={book} />)
      }
    </ul>
  );
};

export default BookList;
