/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'book-title') {
      setTitle(value);
    } else if (id === 'book-author') {
      setAuthor(value);
    } else if (id === 'category') {
      setCategory(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      item_id: uuidv4(),
      author,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <section className="form-container">
      <h2>Add Book</h2>
      <form className="form-control">
        <input
          type="text"
          id="book-title"
          placeholder="Add book title..."
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="book-author"
          placeholder="Add book author..."
          value={author}
          onChange={handleChange}
        />
        <select id="category" value={category} onChange={handleChange}>
          <option value="" disabled>
            Category
          </option>
          <option value="Thriller">Thriller</option>
          <option value="Romance">Romance</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-help">Self help</option>
          <option value="Other">Other</option>
        </select>
        <Button title="Add book" handleClick={handleSubmit} className="btn btn-block" />
      </form>
    </section>
  );
};
export default InputForm;
