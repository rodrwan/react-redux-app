import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Form from './Form';
import logo from '../../logo.svg';
import '../../App.css';

class SignupView extends React.Component {
  submit = data => this.props.submit(data);

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/">Home</Link>
          <Link to="/sign-up">Form</Link>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
        </p>

        <div>
          <Form onSubmit={this.submit} isFetching={this.props.isFetching} />
        </div>

        <a href="https://www.finciero.com" target="_blank" rel="noopener noreferrer">
          Finciero
        </a>
      </div>
    );
  }
}

SignupView.propTypes = {
  submit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default SignupView;
