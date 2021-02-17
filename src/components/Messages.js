import React from 'react';
import styled, { css } from 'styled-components';

const Message = styled.div`
  ${(props) => css`
    color: #53535c;
    border: none;
    border-radius: 4px;
    background-color: ${props.bgColor || '#dceff6'};

    text-align: center;
    padding: 1rem;
    position: fixed;
    top: 12vh;
    left: 10%;
    width: 80%;
    margin: 0 auto;
    display: ${props.message ? 'block' : 'none'};
  `}
`;

export const SuccessMessage = (props) => (
  <Message {...props} bgColor="#dceff6">
    {props.message}
  </Message>
);
export const ErrorMessage = (props) => (
  <Message {...props} bgColor="#f2d5cf">
    {props.message}
  </Message>
);
export const InfoMessage = (props) => (
  <Message {...props} bgColor="#ffda79">
    {props.message}
  </Message>
);
