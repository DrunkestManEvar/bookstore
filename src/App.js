import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContextProvider } from './context/appContext';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import RandomBookPage from './pages/BookPage/BookPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <>
      <AppContextProvider>
        <Navbar />
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/books" component={RandomBookPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </AppContextProvider>
    </>
  );
};

export default App;
