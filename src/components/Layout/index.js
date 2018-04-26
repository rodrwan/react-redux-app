import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

import logo from '../Logo/logo.svg';

const Layout = ({ children }) => (
  <div className="App">
    <Container fluid textAlign="center">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </Container>

    <Container fluid textAlign="left">
      <Menu secondary pointing>
        <Menu.Item as={Link} to="/">
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/sign-up">
          Sign Up
        </Menu.Item>
        <Menu.Item as={Link} to="/login">
          Login
        </Menu.Item>
      </Menu>
    </Container>

    <Container fluid textAlign="left">
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        <br />
      </p>
      {children}
    </Container>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
