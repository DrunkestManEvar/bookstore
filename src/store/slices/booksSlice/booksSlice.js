import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'init',
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async bookTitle => {
    const bookTitleQuery = bookTitle.replace(/ /g, '_');

    const response = await fetch(
      `http://openlibrary.org/search.json?title=${bookTitleQuery}`
    );
    const data = await response.json();
    return data.docs;
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
  },
});

export default booksSlice.reducer;
