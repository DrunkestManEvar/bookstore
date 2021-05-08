import React, { useContext } from 'react';
import AppContext from '../../../context/appContext';
import { useDispatch } from 'react-redux';
import { fetchCurrentBook } from '../../../store/slices/currentBookSlice/currentBookSlice';
import Card from '../../common/Card/Card';
import Button from '../../common/Button/Button';
import BookCoverPlaceholder from '../../common/BookCoverPlaceholder/BookCoverPlaceholder';

const BooksListItem = ({ book }) => {
  const dispatch = useDispatch();
  const { setIsModalOpen } = useContext(AppContext);

  const { bookKey, title, author, coverId } = book;

  let authorName;

  if (typeof author === 'object') [authorName] = author;
  else authorName = author;

  let bookCover;

  if (coverId) {
    bookCover = (
      <img
        src={`http://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
        alt="Book cover"
        className="books-list-item__book-img"
      />
    );
  }

  if (!coverId || coverId < 0)
    bookCover = <BookCoverPlaceholder title={title} author={authorName} />;

  const showBookModal = () => {
    dispatch(fetchCurrentBook(bookKey));
    setIsModalOpen(true);
  };

  return (
    <Card>
      <article className="books-list-item">
        <div className="books-list-item__book-info-overlay">
          {bookCover}
          <div>
            <h4 className="books-list-item__book-title">{title}</h4>
            <p className="books-list-item__book-author">{authorName}</p>
          </div>
        </div>

        <Button
          classesArray={['books-list-item__btn']}
          showBookModal={showBookModal}
        >
          Learn more
        </Button>
      </article>
    </Card>
  );
};

export default BooksListItem;
