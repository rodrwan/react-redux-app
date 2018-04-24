import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import HomePage from './routes/home';
import LoginPage from './routes/login';

const App = ({ location }) => (
  <div>
    <Route location={location} path="/" exact component={HomePage} />
    <Route location={location} path="/login" exact component={LoginPage} />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
