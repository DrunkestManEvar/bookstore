import React from 'react';
import { MdCropRotate } from 'react-icons/md';

const BookCard = () => {
  return (
    <article className="book-desc">
      <div className="book-desc__side book-desc__side_front">
        <MdCropRotate className="book-desc__rotate-icon" />
        <img
          src="https://cdn.shopify.com/s/files/1/0014/3723/7305/files/cta-img.png?v=1596028718"
          alt="Book"
          className="book-desc__book-img"
        />
      </div>

      <div className="book-desc__side book-desc__side_back">
        <p className="book-desc__book-author">Author: Harrison Wells</p>
        <p className="book-desc__book-release-date">
          Release Date: 25 April 2021
        </p>
        <p className="book-desc__book-publisher">Publisher: Fanfics.com</p>
        <p className="book-desc__book-ISBN">ISBN: 1249850345</p>
      </div>
    </article>
  );
};

export default BookCard;
