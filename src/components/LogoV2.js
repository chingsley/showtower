import React from 'react';
import styled, { css } from 'styled-components';
import { string } from 'prop-types';
import { withRouter } from 'react-router-dom';

const LogoDiv = styled.div`
  ${(props) => css`
    // border: 1px solid blue;
    width: 120px;
    display: ${props.display};
    margin: ${props.margin};

    @media only screen and (max-width: 760px) {
      margin: ${props.mobileMargin};
    }
  `}
`;
const LogoV2 = (props) => (
  <LogoDiv {...props}>
    <svg
      width="120"
      height="42"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => props.history.push('/')}
      style={{
        cursor: 'pointer',
        // ...props.style,
      }}
    >
      <g>
        <title>background</title>
        <rect
          x="-1"
          y="-1"
          width="127"
          height="52"
          id="canvas_background"
          fill="none"
        />
      </g>
      <g>
        <title>Layer 1</title>
        <text
          fill={props.color}
          strokeWidth="0"
          strokeOpacity="null"
          fillOpacity="null"
          x="2.72781"
          y="26"
          id="svg_1"
          fontSize="20"
          fontFamily="'Simonetta', serif"
          textAnchor="start"
          xmlSpace="preserve"
          fontStyle="italic"
          transform="matrix(1.0575719910707448,0,0,1,-3.0711035486983747,0) "
          stroke={props.color}
          fontWeight="normal"
        >
          Show ower
        </text>
        <line
          fill="none"
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          x1="47.5"
          y1="41.45313"
          x2="47.5"
          y2="9.45313"
          id="svg_2"
          strokeLinejoin="null"
          strokeLinecap="null"
          stroke={props.color}
        />
        <line
          fill="none"
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          x1="18.5"
          y1="12.45313"
          x2="120.5"
          y2="12.45313"
          id="svg_4"
          strokeLinejoin="null"
          strokeLinecap="null"
          stroke={props.color}
          className="upper-horizontal-stroke"
        />
        <path
          fill="none"
          stroke={props.color}
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          opacity="0.5"
          d="m91,34.45313"
          id="svg_9"
        />
        <line
          fill="none"
          stroke={props.color}
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          x1="48"
          y1="41.45313"
          x2="55"
          y2="31.45313"
          id="svg_14"
          strokeLinejoin="null"
          strokeLinecap="null"
          className="tail-v-section"
        />
        <line
          fill="none"
          stroke={props.color}
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          x1="103"
          y1="20.45313"
          x2="110"
          y2="12.45313"
          id="svg_5"
          strokeLinejoin="null"
          strokeLinecap="null"
          className="top-right-section"
        />
        <line
          fill="none"
          strokeWidth="1.5"
          strokeOpacity="null"
          fillOpacity="null"
          x1="59"
          y1="30.45313"
          x2="107"
          y2="30.45313"
          id="svg_6"
          strokeLinejoin="null"
          strokeLinecap="null"
          stroke={props.color}
          className="lower-horizontal-stroke"
        />
      </g>
    </svg>
  </LogoDiv>
);

LogoV2.propTypes = {
  color: string,
  display: string,
  margin: string,
};

LogoV2.defaultProps = {
  color: '#f43544',
  display: 'inline-block',
  margin: '0',
};

export default withRouter(LogoV2);
