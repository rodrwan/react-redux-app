import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      errors: {},
    };
  }

  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = data => {
    const errors = {};

    if (!data.first_name) errors.first_name = 'First name cannot be blank';
    if (!data.last_name) errors.last_name = 'Last name cannot be blank';
    if (!data.email) errors.email = 'Email name cannot be blank';
    if (!data.phone) errors.phone = 'Phone name cannot be blank';

    this.setState({
      errors,
    });
  };

  submit = () => {
    const { errors } = this.state;
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state);
    }
  };

  render() {
    return (
      <div>
        <div>
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, 2)}</pre>
        </div>

        <div>
          <div>
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={this.onChangeText}
              placeholder="First name"
            />
          </div>

          <div>
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={this.onChangeText}
              placeholder="Last name"
            />
          </div>

          <div>
            <label htmlFor="email">Email name</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.onChangeText}
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              onChange={this.onChangeText}
              placeholder="+56912345678"
            />
          </div>

          <div>
            <button onClick={this.submit} disabled={this.props.isFetching}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Form;
