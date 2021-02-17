import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';

const LoaderContainer = styled.div`
  // border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PageLoader = ({ isLoadingPage }) => (
  <>
    {isLoadingPage && (
      <LoaderContainer>
        <Loader
          className="inline-block"
          type="Oval"
          color="#000000"
          height="40"
          width="40"
        />
      </LoaderContainer>
    )}
  </>
);

const mapStateToProps = (state) => ({
  isLoadingPage: state.isLoadingPage,
});

export default connect(mapStateToProps, {})(PageLoader);
