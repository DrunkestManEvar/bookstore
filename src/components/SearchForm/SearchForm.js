import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../store/slices/booksSlice/booksSlice';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { GiMagnifyingGlass } from 'react-icons/gi';

const SearchForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const inputValue = useRef(null);

  const dispatch = useDispatch();

  const handleInputChange = e => setBookTitle(e.target.value);

  useEffect(() => {
    const searchBookTimeout = setTimeout(() => {
      if (bookTitle && bookTitle === inputValue.current.value) {
        dispatch(fetchBooks(bookTitle));
      }
    }, 1000);

    return () => clearTimeout(searchBookTimeout);
  }, [bookTitle, inputValue, dispatch]);

  return (
    <form className="search-form">
      <Input
        type="text"
        placeholder="Enter book title..."
        value={bookTitle}
        ref={inputValue}
        handleInputChange={handleInputChange}
      />
      <Button classesArray={['btn_primary']}>
        Find <GiMagnifyingGlass />
      </Button>
    </form>
  );
};

export default SearchForm;
