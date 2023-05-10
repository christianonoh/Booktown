import { createSlice } from '@reduxjs/toolkit';

const initialLibrary = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialLibrary,
  reducers: {
    addBook(state, action) {
      state.push({
        item_id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    },
    removeBook(state, { payload }) {
      const bookId = payload;
      return state.filter((book) => book.item_id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
