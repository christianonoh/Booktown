import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

const Book = ({ book }) => (
  <li className="book">
    {book.title}
    <button type="submit" className="btn-icon">
      <FaTrash />
    </button>
  </li>
);
Book.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Book;
