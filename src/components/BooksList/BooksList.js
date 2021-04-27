import React from 'react';
import BooksListItem from './BookListItem/BooksListItem';

const BooksList = () => {
  const arr = [1, 2, 3];

  return (
    <section className="book-list">
      {arr.map((item, index) => {
        return <BooksListItem key={index} />;
      })}
    </section>
  );
};

export default BooksList;
