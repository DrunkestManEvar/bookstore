import React from 'react';

const BookCoverPlaceholder = ({ large }) => {
  const bookCoverPlaceholderClasses = ['book-cover-placeholder'];

  large && bookCoverPlaceholderClasses.push('large');

  return (
    <div className={bookCoverPlaceholderClasses.join(' ')}>
      <p>Cover not found</p>
    </div>
  );
};

export default BookCoverPlaceholder;
