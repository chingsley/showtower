import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from 'styled-components';
import ProfileMain from '../components/ProfileMain';
import ProfileAbout from '../components/ProfileAbout';
import ProfileSkills from '../components/ProfileSkills';
import { makeTopNavTransparent, makeTopNavOpaque } from '../store/actions';
import ProfileEducation from '../components/ProfileEducation';
import ProfileWorkHistory from '../components/ProfileWorkHistory';
import ProfileProjectsListing2 from '../components/ProfileProjectListing2';

const Profile = style.div`
.profile {
    background-color: #f7f8fc;
    padding: 2rem;
    padding-bottom: 5rem;
    display: block;

    &__section {
      padding: 4rem;
      // background-color: white;
      background-color: #fffefe;
      // border: 1px solid #dfe0eb;
      &:nth-child(2) {
        // border: 1px solid red;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:not(:nth-child(2)) {
        // border: 1px solid red;
        margin-top: 2rem;
        border-radius: 4px;
      }

    }
}
`;

class ProfilePage extends Component {
  render() {
    return (
      <>
        <Profile {...this.props}>
          <div className="profile">
            <ProfileMain />
            <div className="profile__section">
              <ProfileAbout />
            </div>
            <div className="profile__section">
              <ProfileSkills />
            </div>
            <div className="profile__section">
              <ProfileEducation />
            </div>
            <div className="profile__section">
              <ProfileWorkHistory />
            </div>
            <div className="profile__section">
              <ProfileProjectsListing2 />
            </div>
          </div>
        </Profile>
      </>
    );
  }
}

export default withRouter(
  connect(null, { makeTopNavTransparent, makeTopNavOpaque })(ProfilePage)
);
