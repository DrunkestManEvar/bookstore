import React from 'react';
import Button from '../Button/Button';

const PaginationButtonsContainer = ({
  currentPage,
  numberOfEntriesLeft,
  goForward,
  goBack,
}) => {
  const containerClasses = ['pagination-btns-container'];

  if (currentPage === 1) containerClasses.push('first-page');

  let buttons;

  if (currentPage === 1 && numberOfEntriesLeft > 1) {
    buttons = (
      <>
        <Button handleClick={goForward}>Go to Page {currentPage + 1}</Button>
      </>
    );
  }

  if (currentPage > 1 && numberOfEntriesLeft > 1) {
    buttons = (
      <>
        <Button handleClick={goBack}>Go to Page {currentPage - 1}</Button>
        <Button handleClick={goForward}>Go to Page {currentPage + 1}</Button>
      </>
    );
  }

  if (currentPage > 1 && numberOfEntriesLeft <= 0) {
    buttons = (
      <Button handleClick={goBack}>Go to Page {currentPage - 1}</Button>
    );
  }

  return <div className={containerClasses.join(' ')}>{buttons}</div>;
};

export default PaginationButtonsContainer;
