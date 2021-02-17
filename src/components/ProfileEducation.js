import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';
import Collapsible from './Collapsible';
import { educationHistories } from '../data/education.data';

const format = (date) => {
  return moment(date).format('YYYY/MM/DD');
};

const Section = styled.section`
  // border: 1px solid red;
  .collapsible-container {
    // border: 1px solid lightblue;
    // border-radius: 5px;
    // 0ver-flow: hidden;
  }
`;

function ProfileEducation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <ProfileSectionHeader title="Education" subtitle="Education" />
      {educationHistories.map((education, index) => {
        const { subject, from, to, details } = education;
        const period = from && to ? `${format(from)}  -  ${format(to)}` : '';
        const aosDelay = index % 2 === 0 ? 'fade-right' : 'fade-left';
        return (
          <div
            key={index}
            className="collapsible-container"
            data-aos={aosDelay}
            data-aos-delay={100 + index * 50}
          >
            <Collapsible subject={subject} period={period}>
              {details}
            </Collapsible>
          </div>
        );
      })}
    </Section>
  );
}

export default ProfileEducation;
