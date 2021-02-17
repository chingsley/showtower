import React from 'react';
import style from 'styled-components';
const whiteGrey = 'hsl(210, 36%, 96%)';

const Styled = style.div`
.pcard {
  // border: 1px solid red;
  border-radius: 0.25rem;
  over-flow: hidden;
  background-color: hsl(210, 36%, 96%);
  height: 25rem;
  // padding: 0.5rem;

  &__img-div {
    display: block;
    maring: 0 auto;
    // padding: 0.5rem;
    cursor: pointer;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    overflow: hidden;
    // border: 1px solid red;
    position: relative;
    height: 15rem;
    width: 100%;

    &__img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      transition: 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    &__overlay {
      // border: 1px solid blue;
      padding: 0.5rem;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      &__title {
        // border: 1px solid red;
        text-align: center;
        color: ${whiteGrey};
        text-decoration: none;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: capitalize;
       padding: 1rem;
    }

    }
  }

  &__content {
    padding: 0.5rem;

    &__txt {
      // border: 1px solid gray;
      margin-bottom: 1rem;
    }
  }

  .name {
    font-weight: bold;
    font-size: 18px;
  }

  .link {
    // border: 1px solid hsl(209, 61%, 16%);
    // border-bottom: 3px solid hsl(209, 61%, 16%);
    border-bottom: 1.5px solid #f43544;
    padding: 0.3rem 0.2rem;
    // background-color: black;
    color: inherit;
    text-decoration: none;
    display: inline-block;
    margin-right: 1rem;
    font-weight: bold;
    transition: 0.2s ease-in-out;

    &:hover {
      color: #f43544;
    }
  }

  .description {
    // border: 1px solid red;
    overflow: hidden;
    height: 5rem;
    text-overflow: ellipsis;
  }

}
`;

function ProjectCardMain(props) {
  const { project } = props;
  const { repo, websiteLink } = project;
  console.log(project.image);
  return (
    <Styled>
      <div className="project pcard">
        <div className="pcard__img-div">
          <img
            src={project.image}
            alt="project-name"
            className="pcard__img-div__img"
          />
          <div className="pcard__img-div__overlay">
            <a
              className="pcard__img-div__overlay__title"
              href="https://showtower.netlify.app"
              target="branch"
            >
              {project.name}
            </a>
          </div>
        </div>
        <div className="pcard__content">
          {/* <p className="pcard__content__txt description">
            {project.description}
          </p> */}
          <p className="pcard__content__txt">Role: {project.role}</p>
          <p className="pcard__content__txt">Stack: {project.stacks}</p>
          <p className="pcard__content__txt link-container">
            {repo && (
              <a className="link" href={repo} target="branch">
                View Repo
              </a>
            )}
            {websiteLink && (
              <a className="link" href={websiteLink} target="branch">
                Go to Site
              </a>
            )}
          </p>
        </div>
      </div>
    </Styled>
  );
}

export default ProjectCardMain;
