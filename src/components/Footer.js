import React from 'react';
import styled from 'styled-components';
import LogoV2 from './LogoV2';

const FooterRegion = styled.div`
  // border: 1px solid green;
  .footer {
    // border: 1px solid salmon;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    padding: 2rem 4rem;
    background: #fafbfc;

    &__upper-part {
      // border: 1px solid red;
      display: flex;
      justify-content: space-between;

      &__list {
        // border: 1px solid green;
        list-style-type: none;
        padding-left: 0;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .footer {
      padding: 2rem 1rem;
      text-align: center;

      &__upper-part {
        display: block;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterRegion>
      <div className="footer">
        <div className="footer__upper-part">
          <ul className="footer__upper-part__list">
            <strong className="footer-upper__part__list__header">
              About Show Tower
            </strong>
            <li className="footer__upper-part__list__item">
              The Show Tower Team
            </li>
            <li className="footer__upper-part__list__item">Idealogy</li>
            <li className="footer__upper-part__list__item">Our Vision</li>
            <li className="footer__upper-part__list__item">Our Mission</li>
          </ul>
          <ul className="footer__upper-part__list">
            <strong className="footer-upper__part__list__header">
              {' Help & FAQs'}
            </strong>
            <li className="footer__upper-part__list__item">
              Who Needs Show Tower
            </li>
            <li className="footer__upper-part__list__item">
              Why Should I Use Show Tower
            </li>
            <li className="footer__upper-part__list__item">item 3</li>
            <li className="footer__upper-part__list__item">item 4</li>
          </ul>
          <ul className="footer__upper-part__list">
            <strong className="footer-upper__part__list__header">list 3</strong>
            <li className="footer__upper-part__list__item">item 1</li>
            <li className="footer__upper-part__list__item">item 2</li>
          </ul>
          <ul className="footer__upper-part__list">
            <strong className="footer-upper__part__list__header">list 4</strong>
            <li className="footer__upper-part__list__item">item 1</li>
            <li className="footer__upper-part__list__item">item 2</li>
          </ul>
        </div>
        <hr />
        <div className="footer__lower-part">
          Copyright © 2020 ShowTower
          <LogoV2 display="block" mobileMargin="0 auto" />
        </div>
      </div>
    </FooterRegion>
  );
};

export default Footer;
