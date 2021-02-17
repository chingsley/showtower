import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import FeaturesSection from '../components/FeaturesSection';
import HomeFindSection from '../components/HomeFindSection';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';

const Home = styled.div`
  // overflow-y: scroll;
  // height: 90vh;
  // border: 1px solid transparent;

  .main-window {
    // border: 1px solid red;
    margin-top: -12vh;
    height: 78vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 6rem;
    color: white;
    // background-image: linear-gradient(226deg, #3e3e3e 0, #000 100%);
    background-image: linear-gradient(
        -270deg,
        rgba(0, 0, 0, 1) 0,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60);
    // background-position: 0% 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .window-content {
      // border: 1px solid red;
      width: 50%;
      color: fcfcfc;

      &__primary-text {
        // border: 1px solid salmon;
        font-size: 2rem;
      }
      &__secondary-text {
        // border: 1px solid salmon;
      }
      &__signup-button {
        border: none;
        outline: none;
        background-color: #f43544;
        color: white;
        padding: 3px 45px;
        border-radius: 3px;
        margin: 0 auto;
      }
    }
  }
  .features-wrapper {
    // border: 1px solid red;
    width: 100%;
    // height: 150rem;
  }

  @media only screen and (max-width: 768px) {
    // border: 1px solid blue;

    .main-window {
      // border: 1px solid yellow;
      align-items: center;
      padding-left: 0;
      height: 100vh;
      background-position: 0% 50%;

      .window-content {
        // border: 1px solid red;
        width: 85%;

        &__primary-text {
          // border: 1px solid green;
          font-size: 1.5rem;
        }
      }
    }
  }
`;

class HomePage extends React.Component {
  constructor() {
    super();
    // console.log('constructor:');
    // console.log('constructor: ', this.featuresRef);
    this.state = {
      isTransparentNavBar: false,
    };
    this.featuresRef = React.createRef();
  }
  static getDerivedStateFromProps(props, state) {
    // console.log('getDerivedStateFromProps: ', state);
    return null;
  }

  monitorNavBar = () => {
    const pos = this.featuresRef?.getBoundingClientRect()?.top;
    // console.log('monitorNavBar: ', this.featuresRef);
    // console.log(pos);
    if (pos < 55 && this.state.isTransparentNavBar) {
      this.setState({ isTransparentNavBar: false });
      this.props.makeTopNavOpaque();
    } else if (pos > 55 && !this.state.isTransparentNavBar) {
      this.setState({ isTransparentNavBar: true });
      this.props.makeTopNavTransparent();
    }
  };

  componentDidMount = () => {
    // console.log('componentDidMount:');
    this.monitorNavBar();
    window.addEventListener('scroll', this.monitorNavBar);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.monitorNavbar);
  }

  componentDidUpdate() {
    // console.log(this.state.isTransparentNavBar);
  }

  render() {
    return (
      <Home>
        <div className="main-window">
          <div className="window-content">
            <p className="window-content__primary-text">
              We capture your projects, accomplishments and qualifications...
            </p>
            <p className="window-content__secondary-text">
              Deomonstrating your skills and potentials to top employers
            </p>
            <button
              onClick={() => this.props.history.push('/signup')}
              className="window-content__signup-button"
            >
              Sign up
            </button>
          </div>
        </div>
        <div
          ref={(element) => (this.featuresRef = element)}
          className="features-wrapper"
        >
          <FeaturesSection />
          <HomeFindSection />
        </div>
      </Home>
    );
  }
}

export default connect(null, { makeTopNavTransparent, makeTopNavOpaque })(
  withRouter(HomePage)
);
