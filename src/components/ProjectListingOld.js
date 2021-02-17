import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import showTowerImg from '../assets/show_tower.png';
import nnsManagerImg from '../assets/nns_mgt.png';
import accessGatewayImg from '../assets/access_gateway.png';
import icad from '../assets/icad.png';

const Section = styled.section`
  // border: 1px solid green;

  .projects {
    // border: 1px solid green;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__card {
      margin-right: 1rem;
      margin-top: 1rem;
      &:not(:first-child) {
        // border: 1px solid black;
      }
    }
  }
`;

function ProfileProjectListing() {
  return (
    <Section>
      <ProfileSectionHeader
        title="Projects And Contributions"
        subtitle="Projects"
      />

      <div className="projects">
        <ProjectCard
          className="projects__card"
          title="Show tower"
          userRole="fullstack developer"
          imageSrc={showTowerImg}
          redirectTo="/chingsley/projects/1"
          shortDescription="A customizable portfolio application, bridging the divide between
              employers and potential employees."
        />
        <ProjectCard
          className="projects__card"
          title="Ship mgt app"
          userRole="backend developer"
          imageSrc={nnsManagerImg}
          shortDescription="A ship management application that automatically notifies ship officers about due maintenance requests"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          className="projects__card"
          title="Access gateway"
          userRole="backend developer"
          imageSrc={accessGatewayImg}
          shortDescription="An access bank payment gateway that offers a simple and secure way to send and receive payments globally"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          className="projects__card"
          title="ICAD"
          userRole="backend developer"
          imageSrc={icad}
          shortDescription="Automation of the bank's ICAD account Submission to Nigeria Interbanking settlement scheme"
          redirectTo="/chingsley/projects/1"
        />
        <ProjectCard
          className="projects__card"
          title="Authors Haven"
          userRole="fullstack developer"
          shortDescription="A blog application that connects profilic writers to avid readers all over the world"
          redirectTo="/chingsley/projects/1"
        />
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
