import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { AuthForm } from './SignupForm';
import { requestPasswordReset } from '../store/actions/user';
// import Message from './Message';

const Label = styled.label`
  margin-top: 0.5rem;
  margin-bottom: 0;
  display: block;
  text-align: left;
`;

class ForgotPasswordForm extends React.Component {
  state = { email: 'enejak.kc@gmail.com' };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    this.props.requestPasswordReset({ email }, this.props.history);
    this.setState({ email: '' });
  };

  render() {
    return (
      <AuthForm {...this.props} onSubmit={this.handleFormSubmit}>
        {/* <Message message={this.props.message} /> */}
        <div className="left-inputs-in-form">
          <Label htmlFor="email">Enter the email you used to signup</Label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            className="form-control"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
          <button className="auth-btn">
            {this.props.isLoading ? (
              <>
                {'Loading '}
                <Loader
                  className="inline-display"
                  type="ThreeDots"
                  color="#fff"
                  height="20"
                  width="20"
                />
              </>
            ) : (
              'Initiate Request'
            )}
          </button>
        </div>
      </AuthForm>
    );
  }
}

const mapStateToProps = (state) => ({
  // message: state.message,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { requestPasswordReset })(
  withRouter(ForgotPasswordForm)
);
