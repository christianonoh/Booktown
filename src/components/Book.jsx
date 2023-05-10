import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-details">
        <h5>{book.category}</h5>
        <h3>{book.title}</h3>
        <h4>{book.author}</h4>
      </div>
      <Button handleClick={() => dispatch(removeBook(book.item_id))} title={<FaTrash />} className="btn-icon" />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
