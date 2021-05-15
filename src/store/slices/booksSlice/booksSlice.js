import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  status: 'init',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async bookTitle => {
    try {
      const bookTitleQuery = bookTitle.replace(/ /g, '_');

      const response = await axios.get(
        `https://infinite-plains-87110.herokuapp.com/http://openlibrary.org/search.json?title=${bookTitleQuery}`
      );

      const books = await response.data.docs;

      return books;
    } catch (error) {
      return error;
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.status = 'idle';
    },
    [fetchBooks.rejected]: (state, action) => {
      state.error = action.error;
    },
  },
});

export default booksSlice.reducer;
