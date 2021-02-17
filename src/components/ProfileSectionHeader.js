import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const ProfilePageSectionHeader = styled.div`
  // border: 1px solid red;
  margin-bottom: 5rem;

  .mini-title {
    margin-bottom: 15px;
    display: block;
    font-size: 10px;
    text-transform: uppercase;
    color: rgb(153, 153, 153);
    font-weight: 500;
    letter-spacing: 5px;
  }
  .main-title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 5px;
    line-height: 1.8;
    position: relative;
  }
`;

function ProfileSectionHeader(props) {
  return (
    <ProfilePageSectionHeader>
      <span className="mini-title">{props.title}</span>
      <h2 className="main-title">{props.subtitle}</h2>
    </ProfilePageSectionHeader>
  );
}

ProfileSectionHeader.propTypes = {
  title: string,
  subtitle: string,
};
ProfileSectionHeader.defaultProps = {
  title: 'specify the section title',
  subtitle: 'specify the section subtitle',
};

export default ProfileSectionHeader;
