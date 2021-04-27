import React from 'react';
import BookCard from '../BookCard/BookCard';
import Overlay from '../Overlay/Overlay';
import Button from '../Button/Button';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ modalType }) => {
  const modalTypes = {
    notification: modalType.msg,
    book: <BookCard />,
  };

  const modalContents = modalTypes[modalType.type];

  return (
    <Overlay>
      <div className="modal">
        <Button classesArray={['btn_close']}>
          <IoMdClose />
        </Button>
        <div className="modal__center">{modalContents}</div>
      </div>
    </Overlay>
  );
};

export default Modal;
