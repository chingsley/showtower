import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import KcLink from './KcLink';
// import Logo from './Logo';
import LogoV2 from './LogoV2';

const Nav = styled.nav`
  ${(props) => {
    // console.log(props);

    const {
      history: {
        location: { pathname },
      },
    } = props;
    // console.log(props && !props.isTransparentTopNav && pathname === '/');
    return `
  // border: 1px solid red;
  z-index: 1000;
  position: fixed;
  top: 0;
  font-family: montserrat;
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  background-color: #fafbfc;
  ${
    props &&
    props.isTransparentTopNav &&
    pathname === '/' &&
    css`
      background-color: transparent;
      backdrop-filter: blur(5px);
    `
  }



  & > * {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  .checkbtn {
    font-size: 30px;
    color: black;
    line-height: 12vh;
    cursor: pointer;
    display: none;
  }
  #check {
    display: none;
  }
  .topnav-ul {
    // border: 1px solid blue;
    display: inline-block;

    .topnav-ul-li {
      // border: 1px solid red;
      display: inline-block;
      line-height: 12vh;
      margin: 0 0.2em;
      padding-top: 15px;
    }
  }
  @media only screen and (max-width: 768px) {
    // border: 1px solid blue;
    z-index: 1000;
    padding: 0 1em;
    .logo {
      border: 1px solid red;
      font-size: 1.5rem;
      // padding-left: 50px;
    }
    .checkbtn {
      // border: 1px solid red;
      display: block;
      &__hamburger-menu {
        ${
          props &&
          props.isTransparentTopNav &&
          pathname === '/' &&
          css`
            color: white;
            color: #f43544;
          `
        }
      }
    }
    .topnav-ul {
      // border: 1px solid red;
      position: fixed;
      top: 12vh;
      // left: -100%;
      right: -100%;
      margin: 0;
      padding: 0;
      height: 88vh;
      width: 50%;
      background: rgba(44, 62, 80, 0.95);
      text-align: center;
      transition: all 0.5s;

      .topnav-ul-li {
        // border: 1px solid white;
        display: block;
        margin: 0;

        & * {
          color: white !important;
          
        }
      }
    }
    #check:checked ~ .topnav-ul {
      // left: 0;
      right: 0;
    }
  }
  `;
  }}
`;

function NavBar(props) {
  // const [state, setState] = useState()
  const [hamburgerCheckedState, toggleHamburger] = useState(false);

  const handleHamburgerToggle = () => toggleHamburger(!hamburgerCheckedState);
  const linkTextColor =
    props.isTransparentTopNav && props.history.location.pathname === '/'
      ? 'white'
      : '#34495e';
  return (
    <Nav {...props} hamburgerCheckedState={hamburgerCheckedState}>
      {/* <Logo /> */}
      <LogoV2 />
      <input
        type="checkbox"
        name="mobile-nav-trigger"
        id="check"
        checked={hamburgerCheckedState}
        onClick={handleHamburgerToggle}
        readOnly
      />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars checkbtn__hamburger-menu"></i>
      </label>
      <ul className="topnav-ul">
        <li className="topnav-ul-li">
          <KcLink
            text="Home"
            to="/"
            color={linkTextColor}
            bgColorOnHover="#f43544"
            colorOnHover="#f5f6fa"
            onClick={handleHamburgerToggle}
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="My Profile"
            to="/chingsley"
            color={linkTextColor}
            bgColorOnHover="#f43544"
            colorOnHover="#f5f6fa"
            onClick={handleHamburgerToggle}
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Sign in"
            to="/login"
            color={linkTextColor}
            bgColorOnHover="#f43544"
            colorOnHover="#f5f6fa"
            onClick={handleHamburgerToggle}
            data-testid="signin-nav-link"
          />
        </li>
        <li className="topnav-ul-li">
          <KcLink
            text="Sign up"
            to="/signup"
            color={linkTextColor}
            bgColorOnHover="#f43544"
            colorOnHover="#f5f6fa"
            onClick={handleHamburgerToggle}
            data-testid="signup-nav-link"
          />
        </li>
      </ul>
    </Nav>
  );
}

const mapStateToProps = (state) => ({
  isTransparentTopNav: state.isTransparentTopNav,
});

export default connect(mapStateToProps, {})(withRouter(NavBar));
