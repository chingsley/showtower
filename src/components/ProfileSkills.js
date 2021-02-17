import React from 'react';
import styled, { css } from 'styled-components';
import 'react-sweet-progress/lib/style.css';
import ProfileSectionHeader from './ProfileSectionHeader';
import { skills } from '../data/skills.data';
import Skill from './Skill';
import { color } from '../utils/variables';

const Section = styled.section`
  ${(props) => {
    console.log(props.skillColor);
    return css`
      // border: 1px solid red;
      position: relative;
      .skills {
        // border: 1px solid green;
        min-height: 10rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
      .btn-new {
        position: absolute;
        top: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 2rem;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        .fa-plus-circle:before {
          // color: ${color.reddish};
        }
      }
    `;
  }}
`;

function ProfileSkills() {
  return (
    <Section>
      <ProfileSectionHeader title="My Specialty" subtitle="Major Skills" />
      <div className="skills">
        {skills
          .sort((s1, s2) => s2.level - s1.level)
          .map((skill, index) => {
            return <Skill skill={skill} aosIndex={index} key={index} />;
          })}
      </div>
      <button className="btn-new">
        {/* <span className="btn-new__text">+</span> */}
        {/* <i className="fa fa-plus" aria-hidden="true"></i> */}
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </button>
    </Section>
  );
}

export default ProfileSkills;
