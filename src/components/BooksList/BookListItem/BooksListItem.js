import React from 'react';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';

const BooksListItem = () => {
  return (
    <Card>
      <article className="books-list-item">
        <div className="books-list-item__book-info-overlay">
          <img
            src="https://cdn.shopify.com/s/files/1/0014/3723/7305/files/cta-img.png?v=1596028718"
            alt="Book"
            className="books-list-item__book-img"
          />
          <div>
            <h4 className="books-list-item__book-title">Mother of Learning</h4>
            <p className="books-list-item__book-author">Harrison Wells</p>
          </div>
        </div>
        <Button classesArray={['books-list-item__btn']}>Learn more</Button>
      </article>
    </Card>
  );
};

export default BooksListItem;
