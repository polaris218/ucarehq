import React from 'react';

const EventBooking = ({
  style = {},
  height = '50px',
}) => (
  <svg
  style={ style }
  height={ height }
  viewBox='0 0 24 24'
  fill="none"
  stroke="#fff"
  className='attendance'
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
<g id="Layer_2"><g id="Outline_Icons"> <polyline className="st0" points="4.5,2.5 0.5,2.5 0.5,23.5 23.5,23.5 23.5,2.5 19.5,2.5 "/> <rect x="4.5" y="0.5" className="st0" width="3" height="4"/> <rect x="16.5" y="0.5" className="st0" width="3" height="4"/> <line className="st0" x1="7.5" y1="2.5" x2="16.5" y2="2.5"/> <line className="st0" x1="0.5" y1="7.5" x2="23.5" y2="7.5"/> <line className="st0" x1="6.5" y1="9.5" x2="6.5" y2="21.5"/> <line className="st0" x1="11.5" y1="9.5" x2="11.5" y2="21.5"/> <line className="st0" x1="16.5" y1="9.5" x2="16.5" y2="21.5"/> <line className="st0" x1="2.5" y1="11.5" x2="21.5" y2="11.5"/> <line className="st0" x1="2.5" y1="15.5" x2="21.5" y2="15.5"/> <line className="st0" x1="2.5" y1="19.5" x2="21.5" y2="19.5"/> </g></g>
  </svg>
  )

export default EventBooking;