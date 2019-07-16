import React from 'react';

const Attendance = ({
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
      <g id="Layer_2"><g id="Outline_Icons"> <polyline className="st0" points="23.5,23.5 0.5,23.5 0.5,0.5 "/> <circle className="st0" cx="7.5" cy="16.5" r="1.5"/> <line className="st0" x1="16.9" y1="8.3" x2="21" y2="3.1"/> <line className="st0" x1="9.9" y1="7.5" x2="14.6" y2="9.1"/> <line className="st0" x1="0.5" y1="11.8" x2="7.2" y2="7.8"/> <line className="st0" x1="16.3" y1="15.8" x2="20.7" y2="13.3"/> <line className="st0" x1="9" y1="16.5" x2="13.5" y2="16.5"/> <line className="st0" x1="0.5" y1="21" x2="6.2" y2="17.3"/> <circle className="st0" cx="8.5" cy="7" r="1.5"/> <circle className="st0" cx="16" cy="9.5" r="1.5"/> <circle className="st0" cx="22" cy="2" r="1.5"/> <circle className="st0" cx="22" cy="12.5" r="1.5"/> <circle className="st0" cx="15" cy="16.5" r="1.5"/></g></g>
    </svg>
)
export default Attendance;