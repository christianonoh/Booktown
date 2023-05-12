import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const dispatch = useDispatch();
  const fetching = useRef(true);

  useEffect(() => {
    if (fetching.current) {
      fetching.current = false;
      dispatch(fetchBooks());
    }
  }, []);
  const bookdata = useSelector((store) => store.books);

  return (
    <section className="booklist-container">
      {
        bookdata.map((book) => (
          <Book
            key={book.id}
            category={book.category}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))
      }
    </section>
  );
};

export default BookList;
