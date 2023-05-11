import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialLibrary = [];

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XIsiOJfiolsPeJmN1xyV/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get(`${apiUrl}books`);
  if (res.data) {
    return res.data;
  }
  return [];
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  await axios.post(`${apiUrl}books`, data);
  return data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${apiUrl}books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: initialLibrary,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchBooks.fulfilled, (state, action) => {
      const newState = state;
      Object.entries(action.payload).forEach((bookItem) => {
        newState.push({
          id: bookItem[0],
          title: bookItem[1][0].title,
          author: bookItem[1][0].author,
          category: bookItem[1][0].category,
        });
      });
      return newState;
    });

    build.addCase(addBook.fulfilled, (state, action) => {
      state.push({
        id: action.payload.item_id,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      });
    });

    build.addCase(removeBook.fulfilled, (state, action) => {
      const newState = state.filter((book) => book.id !== action.payload);
      return newState;
    });
  },
});

export default booksSlice.reducer;
