import React from 'react';
import styled from 'styled-components';

const NotFound = styled.div`
  // border: 1px solid red;
  position: relative;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .notfound-content {
    // border: 1px solid blue;
    padding-left: 10rem;
    position: relative;
    max-width: 560px;

    &__with-img {
      // border: 1px solid red;
      height: 140px;
      width: 140px;
      background-image: url(https://colorlib.com/etc/404/colorlib-error-404-18/img/emoji.png);
      background-size: cover;

      position: absolute;
      left: 0;

      &:before {
        // border: 1px solid green;
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        transform: scale(2.4);
        border-radius: 50%;
        background-color: #f2f5f8;
        z-index: -1;
      }
      &__404 {
        font-family: 'Nunito', sans-serif;
        font-size: 6rem;
        font-weight: 700;
        margin-top: 0px;
        margin-bottom: 10px;
        // color: #151723;
        color: #b20600;
        text-transform: uppercase;
      }

      &__sub {
        font-family: 'Nunito', sans-serif;
        font-size: 21px;
        font-weight: 400;
        margin: 0;
        text-transform: uppercase;
        color: #151723;
        // color: #b20600;
      }

      &__text {
        font-family: 'Nunito', sans-serif;
        color: #999fa5;
        font-weight: 400;
      }
    }

    @media only screen and (max-width: 600px) {
      .notfound-content__with-img__text {
        margin: 1rem 0;
      }
      .notfound-content__with-img__404 {
        font-size: 5rem;
      }
    }
  }
`;

const NotFoundPage = () => (
  <NotFound id="notfound">
    <div className="notfound-content">
      <div className="notfound-content__with-img"></div>
      <h1 className="notfound-content__with-img__404">404</h1>
      <h2 className="notfound-content__with-img__sub">Oops! Page Not Found</h2>
      <p className="notfound-content__with-img__text">
        Looks like the page doesn't exist. Sorry, we couldn't find what you were
        looking for.
      </p>
    </div>
  </NotFound>
);

export default NotFoundPage;
