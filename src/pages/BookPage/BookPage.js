import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchCurrentBook } from '../../store/slices/currentBookSlice/currentBookSlice';
import AppContext from '../../context/appContext';
import BookCard from '../../components/common/BookCard/BookCard';
import Spinner from '../../components/common/Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';

const BookPage = props => {
  const { randomBookClicks } = useContext(AppContext);
  console.log(randomBookClicks);
  const history = useHistory();
  const bookKey = props.location.pathname;
  const book = useSelector(state => state.currentBook.book);
  const bookLoading = useSelector(state => state.currentBook.loading);
  const bookError = useSelector(state => state.currentBook.error);
  const dispatch = useDispatch();

  const generateRandomBookKey = () => {
    return `OL${Math.floor(Math.random() * 10000000)}M`;
  };

  useEffect(() => {
    history.push(`/books/${generateRandomBookKey()}`);
  }, [randomBookClicks, history]);

  useEffect(() => {
    const book = { bookKey };
    dispatch(fetchCurrentBook(book));
  }, [history, dispatch, bookKey]);

  if (bookLoading) return <Spinner />;
  if (bookError) return <ErrorPage />;

  return (
    <main className="page page_random-book">
      <h3 className="page__heading">{book.title}</h3>
      <BookCard book={book} />
    </main>
  );
};

export default BookPage;
