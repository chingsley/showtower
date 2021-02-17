import React from 'react';
import style from 'styled-components';
import ProjectCardMain from '../components/ProjectCardMain';
import { projects } from '../data/projects.data';
// import Logo from '../components/Logo';

const Section = style.section`
padding: 2rem;
  .projects {
    // border: 1px solid grey;
    display: grid;
    gap: 2rem;

   
  }
  @media screen and (min-width: 576px) {
    .projects {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;

function ProjectsPage() {
  return (
    <Section className="">
      <div className="projects">
        {projects.map((project) => (
          <ProjectCardMain key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default ProjectsPage;
