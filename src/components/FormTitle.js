import React from 'react';
import styled, { css } from 'styled-components';

const FormTitle = styled.div`
  ${(props) => {
    const signup = props.location.pathname.match(/^\/signup$/);
    return css`
      // border: 1px solid blue;
      .fa-user {
        /* border: 1px solid blue; */
        color: #eb2f06;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      .form-title {
        color: black;
        font-size: 2rem;
        margin-left: 0.5rem;
      }

      @media only screen and (max-width: 600px) {
        display: ${signup ? 'none' : 'block'};
        width: 80%;
        margin: 0 auto;
      }
    `;
  }}
`;

export default (props) => {
  const { pathname } = props.location;
  return (
    <FormTitle {...props}>
      <i className="fas fa-user">
        <span className="form-title" data-testid="form-title">
          {pathname.match(/^\/login$/)
            ? 'Login'
            : pathname.match(/^\/signup$/)
            ? 'Sign up'
            : pathname.match(/^\/password\/forgot$/)
            ? 'Password reset'
            : 'Reset password'}
        </span>
      </i>
    </FormTitle>
  );
};
