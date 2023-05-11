import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

const Book = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-details">
        <h5>{category}</h5>
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <Button handleClick={() => dispatch(removeBook(id))} title="remove" className="btn-icon" />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
