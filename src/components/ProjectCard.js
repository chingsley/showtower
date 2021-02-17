import React from 'react';
import styled, { css } from 'styled-components';
import KcLink from './KcLink';
import { number, string } from 'prop-types';
import placeholderImg from '../assets/Rectangle.png';

const CardWrapper = styled.div`
  ${(props) => css`
    .card {
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.164);
      border-radius: 3px;
      overflow: hidden;
      width: ${props.widthInRem}rem;
      height: ${props.heightInRem}rem;
      position: relative;

      &__default-img-title {
        // border: 1px solid orangered;
        // font-size: 2rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgba(255, 255, 255, 0.5);
      }

      &__img {
        // border: 1px solid yellow;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 70%;
        // object-fit: contain;
      }
      &__info {
        // border: 1px solid green;
        padding: 1rem;
        position: absolute;
        bottom: 0;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        width: 100%;
        white-space: nowrap;

        /*** transition properties ***/
        height: 30%;
        background-color: white;
        transition: 0.5s ease-in-out;

        &__title {
          // border: 1px solid black;
          overflow: hidden;
          min-height: 1.5rem;
          text-overflow: ellipsis;
        }

        &__short-description {
          // border: 1px solid black;
          overflow: hidden;
          min-height: 2rem;
          max-height: 5.5rem;
          text-overflow: ellipsis;
        }

        &__btn-wrapper {
          // border: 1px solid red;
          display: inline-block;
          &__btn {
            // border: 1px solid blue;
            float: right;
            cursor: pointer;
          }
        }
      }
      &:hover {
        position: relative;

        .card__info {
          // border-top: 2px solid #f43544;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.95);
          text-overflow: initial;
          white-space: normal;
        }
        .card__default-img-title {
          // z-index: -1;
        }
      }
    }
  `}
`;

function ProjectCard(props) {
  return (
    <CardWrapper {...props}>
      <div className="card">
        <img
          src={props.imageSrc || props.defaultImg}
          alt="show-tower-homepage"
          className="card__img"
        />
        {!props.imageSrc && (
          <h2 className="card__default-img-title">{props.title}</h2>
        )}
        <div className="card__info">
          <h5 className="card__info__title">{props.title}</h5>
          <div className="card__info__user-role">
            <strong>Role:</strong> <i>{props.userRole}</i>
          </div>
          <p className="card__info__short-description">
            {props.shortDescription}
          </p>
          <div className="card__info__btn-wrapper">
            <KcLink
              bgColor="black"
              color="rgba(255, 255, 255, 0.8)"
              className="card__info__btn-wrapper__btn"
              to={props.redirectTo}
            >
              {props.buttonText}
            </KcLink>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

ProjectCard.prototype = {
  title: string,
  shortDescription: string,
  buttonText: string,
  redirectTo: string,
  imageSrc: string,
  defaultImg: string,
  widthInRem: number,
  heightInRem: number,
  userRole: string,
};

ProjectCard.defaultProps = {
  title: 'Title',
  shortDescription:
    'Please provide a short description of the project. Text more than 120 characters will be clipped',
  defaultImg: placeholderImg,
  buttonText: 'View Details',
  redirectTo: '/#',
  widthInRem: 20,
  heightInRem: 15,
  userRole: 'not specified',
};

export default ProjectCard;
