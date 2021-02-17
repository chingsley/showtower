import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { AuthForm } from './SignupForm';
import { withRouter } from 'react-router-dom';
import customToast from '../utils/customToast';
import { changePassword } from '../store/actions/auth';

class PasswordResetForm extends React.Component {
  state = {
    password: 'Testing**123',
    confirmPassword: 'Testing**123',
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    const resetToken = this.props.match.params.resetToken;
    if (password !== confirmPassword) {
      return customToast.error('The two passwords do not match');
    }
    this.props.changePassword({ password, resetToken }, this.props.history);
    console.log(this.state, this.props.match.params.resetToken);
  };
  render() {
    return (
      <AuthForm {...this.props} onSubmit={this.handleFormSubmit}>
        <div className="left-inputs-in-form">
          <input
            className="form-control"
            type="password"
            placeholder="Enter your new password"
            required
            name="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
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
              'Reset'
            )}
          </button>
        </div>
      </AuthForm>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { changePassword })(
  withRouter(PasswordResetForm)
);
