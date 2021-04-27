import React from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';
import BooksList from '../../components/BooksList/BooksList';
import Modal from '../../components/common/Modal/Modal';

const HomePage = () => {
  return (
    <main className="page page_home">
      <h3 className="page__heading">Search for your new favorite book!</h3>
      <SearchForm />
      <BooksList />
      <Modal modalType={{ type: 'book' }} />
    </main>
  );
};

export default HomePage;
