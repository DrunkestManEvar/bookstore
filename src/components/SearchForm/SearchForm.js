import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../store/slices/booksSlice/booksSlice';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { GiMagnifyingGlass } from 'react-icons/gi';

const SearchForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [lastBookQuery, setLastBookQuery] = useState('');
  const inputValue = useRef(null);

  const dispatch = useDispatch();

  const handleInputChange = e => setBookTitle(e.target.value);

  const submitForm = e => {
    e.preventDefault();
    setBookTitle(inputValue.current.value);
    setLastBookQuery(inputValue.current.value);
    dispatch(fetchBooks(bookTitle));
  };

  useEffect(() => {
    const searchBookTimeout = setTimeout(() => {
      if (
        bookTitle &&
        bookTitle === inputValue.current.value &&
        bookTitle !== lastBookQuery
      )
        dispatch(fetchBooks(bookTitle));
    }, 1000);

    return () => clearTimeout(searchBookTimeout);
  }, [bookTitle, lastBookQuery, inputValue, dispatch]);

  return (
    <form className="search-form" onSubmit={submitForm}>
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
