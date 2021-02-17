import React from 'react';
import styled from 'styled-components';
import ProfileSectionHeader from './ProfileSectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects.data';

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
        {projects
          .sort((p1, p2) => Number(p2.rank) - Number(p1.rank))
          .slice(0, 5)
          .map((project, index) => {
            const { id, name, image, role, shortDescription } = project;
            return (
              <ProjectCard
                key={id}
                className="projects__card"
                title={name}
                userRole={role}
                imageSrc={image}
                redirectTo={`/chingsley/projects/${id}`}
                shortDescription={shortDescription}
              />
            );
          })}
        {/* <ProjectCard
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
        /> */}
      </div>
    </Section>
  );
}

export default ProfileProjectListing;
