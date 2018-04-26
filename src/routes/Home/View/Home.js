import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Layout from '../../../components/Layout';

class Home extends React.Component {
  componentWillMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers();
    }
  }

  render() {
    return (
      <Layout>
        <List as="ol">
          {this.props.isFetching ? (
            <List.Item content="loading..." />
          ) : (
            this.props.users.map(u => (
              <List.Item as="li" content={`${u.name} - ${u.email}`} key={`u-${u.id}`} />
            ))
          )}
        </List>
      </Layout>
    );
  }
}

Home.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
};

export default Home;
