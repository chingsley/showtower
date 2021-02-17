import React from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import styled, { css } from 'styled-components';
import { useEffect } from 'react';

const InputUnitContainer = styled.div`
  ${(props) => {
    return css`
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      overflow: hidden;
      width: 35%;
      width: ${props.widthInPercent || '35'}%;
      text-align: center;
      display: flex;
      height: 2.5rem;
      margin: ${props.margin};

      .input {
        // border: 1px solid red;
        border: none;
        display: block;
        width: 70%;
        height: 100%;
        outline: none;
        padding-left: 1rem;
      }
      .btn {
        border: none;
        outline: none;
        display: block;
        width: 30%;
        height: 100%;
        background-color: black;
        color: white;
        font-weight: 400;
        cursor: pointer;
        border-radius: 0;
      }
      @media only screen and (max-width: 760px) {
        // border: 1px solid lightblue;
        width: ${props.mobileWidthInPercent || '90'}%;
      }
    `;
  }}
`;

const InputUnit = (props) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <InputUnitContainer
      {...props}
      data-aos={props.dataAos}
      data-aos-easing="ease-in-sine"
    >
      <input type="text" className="input" />
      <button className="btn">search</button>
    </InputUnitContainer>
  );
};

export default InputUnit;
