import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../../components/Layout';
import Form from '../../../components/Form';

class Signup extends React.Component {
  submit = data => this.props.submit(data);

  render() {
    return (
      <Layout>
        <Form onSubmit={this.submit} isFetching={this.props.isFetching} />
      </Layout>
    );
  }
}

Signup.propTypes = {
  submit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Signup;
