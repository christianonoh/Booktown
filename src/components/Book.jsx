import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';
import CircularProgress from './Progress';
import UpdateProgress from './UpdateProgress';

const Book = ({
  category, title, author, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="book-details-cont">
        <div className="book-details">
          <h5 id="book-category">{category}</h5>
          <h3 id="book-title-display">{title}</h3>
          <h5 id="book-author">{author}</h5>
          <span className="book-btns">
            <Button handleClick={() => dispatch(removeBook(id))} title="Comments" className="btn-icon" />
            <Button handleClick={() => dispatch(removeBook(id))} title="Remove" className="btn-icon" />
            <Button handleClick={() => dispatch(removeBook(id))} title="Edit" className="btn-icon" />
          </span>
        </div>
        <CircularProgress percentage={60} />
      </div>

      <div className="book-progress">
        <UpdateProgress />
      </div>

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
