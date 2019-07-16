import React from 'react';

const SamllGroup = ({
  style = {
    maxHeight: '50px',
  },
  height = '50px',
}) => (
    <svg
      style={ style }
      width='50px'
      height= { height }
      viewBox='0 0 24 15'
      fill="none"
      stroke="#323a46"
      className='smallgroup'
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Layer_2"> <g id="Outline_Icons"> <line className="st0" x1="2.5" y1="12.5" x2="2.5" y2="14.5"></line> <line className="st0" x1="21.5" y1="12.5" x2="21.5" y2="14.5"></line> <path className="st0" d="M0.5,6.5v4c0,1.1,0.9,2,2,2h19c1.1,0,2-0.9,2-2v-4"></path> <path className="st0" d="M20.5,6.5v1c0,0.6-0.4,1-1,1h-15c-0.6,0-1-0.4-1-1v-1"></path> <path className="st0" d="M21.5,5.1V4.5c0-2.2-1.8-4-4-4h-11c-2.2,0-4,1.8-4,4v0.6"></path> <path className="st0" d="M0.5,6.5C0.5,5.7,1.2,5,2,5s1.5,0.7,1.5,1.5"></path> <path className="st0" d="M23.5,6.5C23.5,5.7,22.8,5,22,5s-1.5,0.7-1.5,1.5"></path> <line className="st0" x1="11.5" y1="0.5" x2="11.5" y2="8.5"></line> </g> </g>
    </svg>
)
export default SamllGroup;