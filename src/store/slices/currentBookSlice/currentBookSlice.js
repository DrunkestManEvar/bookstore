import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

const fetchAuthorName = async authorsArray => {
  try {
    const author = authorsArray[0].key;
    const authorResponse = await fetch(`https://openlibrary.org${author}.json`);
    return authorResponse.json();
  } catch (error) {
    return 'Not Found';
  }
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
      console.log(
        `https://infinite-plains-87110.herokuapp.com/https://openlibrary.org/${bookKey}.json`
      );
      const bookResponse = await fetch(
        `https://infinite-plains-87110.herokuapp.com/https://openlibrary.org/${bookKey}.json`
      );
      const {
        title,
        publishers,
        publish_date,
        isbn_10,
        isbn_13,
        authors,
        covers: coverId,
      } = await bookResponse.json();

      const { name: author } = await fetchAuthorName(authors);

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
    [fetchCurrentBook.rejected]: (state, action) => {
      state.book = null;
      state.loading = false;
      state.error = true;
    },
  },
});

export default currentBookSlice.reducer;
