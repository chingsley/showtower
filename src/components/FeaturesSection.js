import React from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Features = styled.div`
  // border: 1px solid lightblue;
  padding-top: 4rem;

  .feature-title {
    // border: 1px solid green;
    text-align: center;
    letter-spacing: 0.5px;

    &__subtitle {
      // border: 1px solid grey;
      width: 40%;
      margin: auto;
      margin-bottom: 4rem;
      text-align: center;
      font-size: 1.25rem;
    }
  }

  .feature-cards {
    // border: 1px solid red;
    display: flex;
    justify-content: center;

    &__card {
      // border: 1px solid lightblue;
      width: 20rem;
      height: 20rem;
      background: #fafbfc;
      padding: 1rem;

      &:nth-child(2) {
        // border: 1px solid red;
        margin: 0 2rem;
      }

      &__fa {
        // border: 1px solid gray;
        font-size: 2rem;
        margin-bottom: 1rem;
        // color: #eb2f06;
        color: #f43544;
      }

      &__title {
        // border: 1px solid gray;
        display: block;
        font-size: 1.25rem;
        font-weight: 400;
        color: #0d202f;
      }
      &__text {
        color: #3b4f60;
        font-size: 1rem;
        font-weight: 400;
      }
      &__inpage-nav {
        // border: 1px solid grey;
        display: inline-block;
        width: 4rem;
        padding: 0.25rem 4rem;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        background: black;
        color: white;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .feature-title {
      &__subtitle {
        // border: 1px solid grey;
        width: 80%;
      }
    }
    .feature-cards {
      // border: 1px solid red;
      display: block;

      &__card {
        // border: 1px solid blue;
        margin: 2rem auto;

        &:nth-child(2) {
          margin: 2rem auto;
        }
      }
    }
  }
`;

const FeaturesSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Features className="features">
      <h3 className="feature-title">
        Offering a thorough respresentation of your Skills
      </h3>
      <div className="feature-title__subtitle">
        There's no substitute for hardwork. But we pair hardwork with
        presentation.
      </div>
      <div className="feature-cards">
        <div
          className="feature-cards__card"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <i className="fas fa-briefcase feature-cards__card__fa"></i>
          <span className="feature-cards__card__title">
            Build your own portfolio
          </span>
          <p className="feature-cards__card__text">
            With this feature, users will be able to create their portfolio on
            showtower. Portfolio setup is will be straight forward and easy; it
            will take users no more than 10 minutes.
            <br />
            <hr />
            <br />
            Coming soon....
          </p>
          <Link to="/login" className="feature-cards__card__inpage-nav">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div className="feature-cards__card" data-aos="fade-down">
          <i className="far fa-file-powerpoint feature-cards__card__fa"></i>
          <span className="feature-cards__card__title">
            Grant controlled access to your portfolio
          </span>
          <p className="feature-cards__card__text">
            Users will be able to give people controlled access to their
            portfolio using a code system that decides what other users can see
            in your portfolio.
            <br />
            <hr />
            <br />
            Coming soon...
          </p>
          <Link to="/login" className="feature-cards__card__inpage-nav">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
        <div
          className="feature-cards__card"
          data-aos="fade-right"
          data-aos-delay={100}
        >
          <i className="fas fa-user-tie feature-cards__card__fa"></i>
          <span className="feature-cards__card__title">
            Connect with other professionals
          </span>
          <p className="feature-cards__card__text">
            Seeing other peooples' achievements can be inspiring. That's why our
            users will be allowed to keep in touch professionally.
            <br />
            <hr />
            <br />
            Coming soon...
          </p>
          <Link to="/signup" className="feature-cards__card__inpage-nav">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </Features>
  );
};

export default withRouter(FeaturesSection);
