import React from 'react';

const Dashboards = ({
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
<g fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10"><g strokeLinecap="round"><path d="M23.5 20.5c0 1.104-.895 2-2 2h-19c-1.104 0-2-.896-2-2v-17c0-1.104.896-2 2-2h19c1.105 0 2 .896 2 2v17zM.5 6.5h23"/><circle cx="4" cy="4" r=".5"/><circle cx="7" cy="4" r=".5"/><circle cx="10" cy="4" r=".5"/></g><circle strokeLinecap="round" cx="8" cy="14.5" r="5"/><path strokeLinecap="round" d="M10.82 10.372L8 14.5l3.205 3.837M8 14.5H3"/><path d="M15 10.5h6M15 13.5h6M15 16.5h6"/></g>
  </svg>
  )

export default Dashboards;