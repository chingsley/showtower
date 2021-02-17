import React from 'react';

import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import InputUnit from './InputUnit';

const HomeFind = styled.div`
  .home-find {
    // border: 1px solid gray;
    padding-top: 8rem;
    padding-bottom: 8rem; // to be removed

    &__title {
      // border: 1px solid gray;
      text-align: center;
      letter-spacing: 0.5px;
      // font-weight: 400;
    }
    }
  }
  @media only screen and (max-width: 760px) {
    .home-find {
      // border: 1px solid blue;
      padding-top: 4rem;

      &__title {
        letter-spacing: 0;
      }
    }
  }
`;

const HomeFindSection = (props) => {
  return (
    <HomeFind>
      <div className="home-find">
        <h3 className="home-find__title">Looking for someone? search below</h3>
        <InputUnit widthInPercent={40} margin="auto" dataAos="zoom-in" />
      </div>
    </HomeFind>
  );
};

export default withRouter(HomeFindSection);
