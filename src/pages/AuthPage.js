import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import loginImage from '../assets/loginImage.png';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import PasswordResetForm from '../components/PasswordResetForm';
import { validatePasswordResetToken } from '../store/actions/auth';
import {
  SuccessMessage,
  ErrorMessage,
  InfoMessage,
} from '../components/Messages';

import '../styles/signupPage.css';
import FormTitle from '../components/FormTitle';
import PageLoader from '../components/PageLoader';

class AuthPage extends React.Component {
  componentDidMount() {
    const {
      location: { pathname },
      match: {
        params: { resetToken },
      },
    } = this.props;
    if (pathname.match(/password\/reset\/*/)) {
      console.log(this.props);
      this.props.validatePasswordResetToken(resetToken, this.props.history);
    }
  }

  render() {
    const { pathname } = this.props.location;
    if (
      pathname.match(/^\/password\/reset\/*/) &&
      !this.props.isValidPasswordResetToken
    ) {
      return <PageLoader />;
    }
    return (
      <div className="auth-page">
        <div className="page-content">
          <div className="content-left">
            <img src={loginImage} alt="person-reading" />
          </div>
          <div className="content-right">
            <FormTitle {...this.props} />

            {pathname.match(/\/signup/i) && (
              <>
                <SignupForm />
                <div className="div__auth-nav">
                  <Link to="/login" className="auth-nav">
                    Already a member? Login here
                  </Link>
                </div>
              </>
            )}
            {pathname.match(/\/login/) && (
              <>
                <LoginForm />
                <div className="div__auth-nav">
                  <Link to="/password/forgot" className="auth-nav">
                    Forgot Password?
                  </Link>
                </div>
                <div className="div__auth-nav">
                  <Link to="/signup" className="auth-nav">
                    Don't have an account? signup here
                  </Link>
                </div>
              </>
            )}
            {pathname.match(/\/password\/forgot/i) && (
              <>
                <ForgotPasswordForm />
                <div className="div__auth-nav">
                  <Link to="/signup" className="auth-nav">
                    Don't have an account? signup here
                  </Link>
                </div>
              </>
            )}
            {pathname.match(/^\/password\/reset\/*/) && (
              <>
                <PasswordResetForm {...this.props} />
              </>
            )}
          </div>
        </div>
        <SuccessMessage message={this.props.successMessage} />
        <ErrorMessage message={this.props.errorMessage} />
        <InfoMessage message={this.props.infoMessage} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  isValidPasswordResetToken: state.isValidPasswordResetToken,
  successMessage: state.messages.successMessage,
  infoMessage: state.messages.infoMessage,
  errorMessage: state.messages.errorMessage,
});

export default connect(mapStateToProps, { validatePasswordResetToken })(
  withRouter(AuthPage)
);
