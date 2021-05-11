import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BooksListItem from './BookListItem/BooksListItem';
import PaginationButtonsContainer from '../common/PaginationButtonsContainer/PaginationButtonsContainer';
import Spinner from '../common/Spinner/Spinner';

const BooksList = () => {
  const books = useSelector(state => state.books.books);
  const booksStatus = useSelector(state => state.books.status);
  const [booksPage, setBooksPage] = useState(1);

  let content;

  if (booksStatus === 'loading') return <Spinner />;

  if (!books.length && booksStatus !== 'loading')
    content = (
      <h3>
        No books have been found :( Please check if the book title is correct.
      </h3>
    );

  if (!books.length && booksStatus === 'init')
    content = <h3>Enter a book title to find books!</h3>;

  if (books.length) {
    const pageFirstBook = (booksPage - 1) * 10;
    const pageLastBook = booksPage * 10;
    content = books.slice(pageFirstBook, pageLastBook).map((book, index) => {
      const {
        title,
        author_name: author,
        cover_i: coverId,
        cover_edition_key,
      } = book;

      const bookItem = {
        bookKey: `books/${cover_edition_key}`,
        title,
        author,
        coverId,
      };

      return <BooksListItem book={bookItem} key={index} />;
    });
  }

  return (
    <>
      <section className="book-list">{content}</section>
      {books.length ? (
        <PaginationButtonsContainer
          numberOfEntriesLeft={books.length - booksPage * 10}
          currentPage={booksPage}
          goForward={() => setBooksPage(booksPage + 1)}
          goBack={() => setBooksPage(booksPage - 1)}
        />
      ) : null}
    </>
  );
};

export default BooksList;
