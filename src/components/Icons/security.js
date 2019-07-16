import React from 'react';

const Security = ({
  style = {},
  height = '50px',
}) => (
  <svg
  style={ style }
  height={ height }
  viewBox='0 0 24 24'
  fill="none"
  stroke="#fff"
  className=''
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
>
<g fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10"><circle cx="12" cy="15" r=".5"/><path strokeLinecap="round" d="M12 15.5v3"/><path d="M3.5 9.5h17v14h-17zM6.5 6C6.5 2.962 8.962.5 12 .5s5.5 2.462 5.5 5.5v3.5h-11V6z"/></g>
</svg>
  )
export default Security;