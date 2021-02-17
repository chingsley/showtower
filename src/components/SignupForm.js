import React from 'react';
// import './styles/signupForm.css';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import ImageUpload from './ImageUpload';
import { registerUser } from '../store/actions';
import customToast from '../utils/customToast';
import ImageUploadMobile from './ImageUploadMobile';

export const AuthForm = styled.form`
  ${(props) => {
    return css`
      // border: 1px solid salmon;
      text-align: center;
      display: flex;
      justify-content: space-between;
      // margin-right: 2rem;

      .left-inputs-in-form {
        // width: 18rem;
        width: 55%;
        .form-control,
        .auth-btn {
          box-sizing: border-box;
          height: 2.5rem;
          margin: 0.3rem 0;
          font-size: 1em;
        }

        .form-control {
          display: inline-block;
          width: 100%;
          padding-left: 1.5rem;
        }

        .auth-btn {
          display: inline-block;
          cursor: pointer;
          width: 100%;
          margin-bottom: 2rem;
          background-color: black;
          color: white;
          font-weight: 400;
          border-radius: 0.25rem;
          border: none;
          outline: none;

          ${(props) =>
            props.isLoading &&
            css`
              background-color: rgba(0, 0, 0, 0.87);
              cursor: not-allowed;
              pointer-events: none;
            `}
        }
      }

      .right-content-in-form {
        // border: 1px solid red;
        width: 45%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
      }

      @media only screen and (max-width: 1049px) {
        // border: 1px solid red;

        .left-inputs-in-form {
          width: 80%;
        }
        .right-content-in-form {
          display: none;
        }
      }

      @media only screen and (max-width: 600px) {
        // border: 1px solid blue;
        flex-direction: column-reverse;
        display: flex;
        flex-direction: column;
        align-items: center;

        .left-inputs-in-form {
          // border: 1px solid red;
          width: 80%;
        }
        .right-content-in-form {
          display: none;
        }
      }
    `;
  }}
`;

class SignupForm extends React.Component {
  state = {
    form: {
      firstName: 'kc',
      lastName: 'eneja',
      email: 'eneja.kc2@gmail.com',
      username: 'chingsley',
      password: 'Chinonxo*123',
      confirmPassword: 'Chinonxo*123',
      image: null,
    },
  };

  handleInputChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      },
    }));
  };

  handleImageChange = (e) => {
    const [pictureFile] = e.target.files;
    this.setState((prevState) => ({
      ...prevState,
      form: {
        ...prevState.form,
        image: pictureFile,
      },
    }));
  };

  submitForm = (e) => {
    e.preventDefault();

    const { confirmPassword, ...form } = this.state.form;
    if (confirmPassword !== form.password) {
      customToast.error('the two passwords do not match');
      return;
    }

    const formData = new FormData();
    Object.entries(form).map(([key, value]) => {
      if (key === 'image' && value instanceof Blob) {
        formData.append(key, value, value.name);
      }
      if (key !== 'image') {
        formData.append(key, value);
      }
      return true;
    });

    this.props.registerUser(formData, this.props.history);
  };

  render() {
    return (
      <AuthForm {...this.props} onSubmit={this.submitForm}>
        <div className="left-inputs-in-form">
          <ImageUploadMobile handleImageChange={this.handleImageChange} />
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.form.firstName}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.form.lastName}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.form.username}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.form.email}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.form.password}
            onChange={this.handleInputChange}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={this.state.form.confirmPassword}
            onChange={this.handleInputChange}
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
              'Sign Up'
            )}
          </button>
        </div>
        <div className="right-content-in-form">
          <ImageUpload handleImageChange={this.handleImageChange} />
        </div>
      </AuthForm>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(SignupForm)
);
