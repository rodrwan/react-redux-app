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
      isValid: '',
      error: {},
    };
  }

  onChangeText = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = data => {
    const error = {};
    let isValid = true;

    if (!data.first_name) error.first_name = 'First name cannot be blank';
    if (!data.last_name) error.last_name = 'Last name cannot be blank';
    if (!data.email) error.email = 'Email name cannot be blank';
    if (!data.phone) error.phone = 'Phone name cannot be blank';

    if (Object.prototype.hasOwnProperty.call(error, 'first_name')) isValid = false;
    if (Object.prototype.hasOwnProperty.call(error, 'last_name')) isValid = false;
    if (Object.prototype.hasOwnProperty.call(error, 'email')) isValid = false;
    if (Object.prototype.hasOwnProperty.call(error, 'phone')) isValid = false;

    this.setState({
      error,
      isValid,
    });
  };

  submit = () => {
    this.validate(this.state);
    if (this.state.isValid) {
      this.props.submit(this.state);
    }
  };

  render() {
    return (
      <div>
        <div>
          <pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
        <form>
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
            <button disabled={!this.state.isValid && this.props.isFetching} onSubmit={this.submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default Form;
