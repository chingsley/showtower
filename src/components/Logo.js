import React from 'react';
import { string } from 'prop-types';
import { withRouter } from 'react-router-dom';

const Logo = (props) => (
  <svg
    width="125"
    height="50"
    xmlns="http://www.w3.org/2000/svg"
    onClick={() => props.history.push('/')}
    style={{ cursor: 'pointer', ...props.style }}
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
        x="14.32662"
        y="29"
        id="svg_1"
        fontSize="20"
        fontFamily="'Trebuchet MS', Gadget, sans-serif"
        textAnchor="start"
        xmlSpace="preserve"
        fontStyle="italic"
        transform="matrix(1.0575719910707448,0,0,1,-3.0711035486983747,0) "
        stroke={props.color}
        fontWeight="normal"
      >
        show ower
      </text>
      <line
        fill="none"
        strokeWidth="1.5"
        strokeOpacity="null"
        fillOpacity="null"
        x1="62.5"
        y1="41.45313"
        x2="62.5"
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
        x1="39.5"
        y1="12.45313"
        x2="120.5"
        y2="12.45313"
        id="svg_4"
        strokeLinejoin="null"
        strokeLinecap="null"
        stroke={props.color}
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
        x1="62"
        y1="41.45313"
        x2="69"
        y2="31.45313"
        id="svg_14"
        strokeLinejoin="null"
        strokeLinecap="null"
      />
    </g>
  </svg>
);

Logo.propTypes = {
  color: string,
};

Logo.defaultProps = {
  color: '#f43544',
};

export default withRouter(Logo);
