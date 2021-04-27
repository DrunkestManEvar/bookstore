import React from 'react';
import { FaSkullCrossbones } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <main className="page page_error">
      <h3 className="page__heading">
        It's a dead end, Stranger... <FaSkullCrossbones />
      </h3>
    </main>
  );
};

export default ErrorPage;
