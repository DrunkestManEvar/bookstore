import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import AppContext from '../../../context/appContext';
import BookCard from '../BookCard/BookCard';
import Spinner from '../Spinner/Spinner';
import Overlay from '../Overlay/Overlay';
import Button from '../Button/Button';
import ErrorPage from '../../../pages/ErrorPage/ErrorPage';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ modalType }) => {
  const { setIsModalOpen } = useContext(AppContext);

  const book = useSelector(state => state.currentBook.book);
  const bookLoading = useSelector(state => state.currentBook.loading);
  const bookError = useSelector(state => state.currentBook.error);

  let bookContent;

  if (bookLoading) bookContent = <Spinner />;
  else if (bookError) bookContent = <ErrorPage />;
  else bookContent = <BookCard book={book} />;

  const modalTypes = {
    notification: modalType.msg,
    book: bookContent,
  };

  const modalContents = modalTypes[modalType.type];

  return (
    <Overlay>
      <div className="modal">
        <Button
          classesArray={['btn_close']}
          showBookModal={() => setIsModalOpen(false)}
        >
          <IoMdClose />
        </Button>
        <div className="modal__center">{modalContents}</div>
      </div>
    </Overlay>
  );
};

export default Modal;
