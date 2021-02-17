import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import Aos from 'aos';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const StyledSkill = styled.div`
  ${(props) => {
    console.log(props.skillColor);
    return css`
      // border: 1px solid lightblue;
      width: 45%;
      margin-bottom: 1rem;
      .name {
        color: #34495e;
        text-transform: capitalize;
        font-size: 0.8rem;
      }
      .react-sweet-progress-line-inner {
        // border: 1px solid red;
        // background: rgba(0, 0, 0, 0.5) !important;
        background: ${props.skillColor} !important;
        min-height: 5px;
        &:after {
          position: absolute;
          top: -2px;
          right: 0;
          width: 10px;
          height: 10px;
          content: '';
          // background: #2c98f0;
          background: rgba(0, 0, 0, 1);
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          border-radius: 50%;
        }
      }
    `;
  }}
`;

function Skill(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const dataAos = props.aosIndex % 2 === 0 ? 'fade-left' : 'fade-right';
  const dataAosDelay = props.aosIndex * 50;

  const computeSkillColor = ({ level }) => {
    if (level < 30) return 'rgba(3, 9, 15, 0.01)';
    if (level < 50) return 'rgba(3, 9, 15, 0.2)';
    if (level < 70) return 'rgba(3, 9, 15, 0.4)';
    if (level < 80) return 'rgba(3, 9, 15, 0.6)';
    if (level < 90) return 'rgba(3, 9, 15, 0.8)';
    return 'rgba(3, 9, 15, 1)';
  };
  return (
    <StyledSkill
      skillColor={computeSkillColor(props.skill)}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <span className="name">{props.skill.name}</span>
      <Progress percent={Number(props.skill.level)} />
    </StyledSkill>
  );
}
export default Skill;
