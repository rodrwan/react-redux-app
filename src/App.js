import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from './reducers/users';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br />
        </p>
        <div>
          {this.props.isFetching ? (
            <div>loading...</div>
          ) : (
            this.props.users.map(u => (
              <p key={`u-${u.id}`}>
                {u.id}.- {u.name} - {u.email}
                <br />
              </p>
            ))
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  // numbers: state.data.numbers
  users: state.users.users,
  isFetching: state.users.isFetching
});

export default connect(mapStateToProps, {
  getUsers
})(App);