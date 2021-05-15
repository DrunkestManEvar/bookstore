import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  book: {
    title: '',
    publishers: [],
    isbn_10: null,
    isbn_13: null,
    publish_date: null,
  },
  loading: true,
  error: false,
};

export const fetchCurrentBook = createAsyncThunk(
  'currentBookSlice/fetchCurrentBook',
  async book => {
    const { bookKey, author } = book;

    const bookKeyValue = bookKey.slice(6);

    if (bookKeyValue === 'undefined') {
      return { author };
    }

    if (bookKey) {
      const bookResponse = await axios.get(
        `https://infinite-plains-87110.herokuapp.com/https://openlibrary.org/${bookKey}.json`
      );

      const {
        title,
        publishers,
        publish_date,
        isbn_10,
        isbn_13,
        covers: coverId,
      } = await bookResponse.data;

      const currentBook = {
        title,
        publishers,
        publish_date,
        isbn_10,
        isbn_13,
        author,
        coverId,
      };

      return currentBook;
    }
  }
);

const currentBookSlice = createSlice({
  name: 'currentBook',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentBook.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [fetchCurrentBook.fulfilled]: (state, action) => {
      state.book = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchCurrentBook.rejected]: state => {
      state.book = null;
      state.loading = false;
      state.error = true;
    },
  },
});

export default currentBookSlice.reducer;
