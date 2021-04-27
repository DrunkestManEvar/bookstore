import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import RandomBookPage from './pages/RandomBookPage/RandomBookPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/random-book/:id" component={RandomBookPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </>
  );
};

export default App;
