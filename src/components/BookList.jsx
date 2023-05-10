import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookdata = useSelector((store) => store.books);

  return (
    <section className="booklist-container">
      <h1>Books</h1>
      <div>
        {
        bookdata.map((book) => <Book key={book.item_id} book={book} />)
      }
      </div>
    </section>
  );
};

export default BookList;
