import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Aos from 'aos';
import ProfileSectionHeader from './ProfileSectionHeader';
import Collapsible from './Collapsible';
import { workHistories } from '../data/work.data';

// will contain the organization, the timeline, the role and the job description
const Section = styled.section`
  // border: 1px solid red;
  .role {
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

function ProfileEducation() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Section>
      <ProfileSectionHeader title="Experience" subtitle="Work Experience" />
      {workHistories.map((workHistory, index) => {
        const { subject, from, to, role, details } = workHistory;
        const aosDelay = index % 2 === 0 ? 'fade-right' : 'fade-left';
        return (
          <div
            key={index}
            className="collapsible-container"
            data-aos={aosDelay}
            data-aos-delay={100 + index * 50}
          >
            <Collapsible
              subject={subject}
              period="2020-12-19 - Present"
              expandAsDefault={false}
            >
              <h4 className="role">{role}</h4>
              {details}
            </Collapsible>
          </div>
        );
      })}
    </Section>
  );
}

export default ProfileEducation;
