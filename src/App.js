import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HomePage from './routes/home';
import SignUpPage from './routes/sign-up';

const App = ({ location }) => (
  <div>
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/sign-up" exact component={SignUpPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
