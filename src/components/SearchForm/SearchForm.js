import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { GiMagnifyingGlass } from 'react-icons/gi';

const SearchForm = () => {
  return (
    <form className="search-form">
      <Input type="text" placeholder="Enter book title..." />
      <Button classesArray={['btn_primary']}>
        Find <GiMagnifyingGlass />
      </Button>
    </form>
  );
};

export default SearchForm;
