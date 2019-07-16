import React from 'react';

const People = ({
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
<path fill="none" stroke="#fff" strokeLinejoin="round" strokeMiterlimit="10" d="M12 23.5h11.5s0-2.057-1-4.057c-.746-1.492-4-2.5-8-4v-3s1.5-1 1.5-3c.5 0 1-2 0-2.5 0-.298 1.34-2.802 1-4.5-.5-2.5-7.5-2.5-8-.5-3 0-1 4.594-1 5-1 .5-.5 2.5 0 2.5 0 2 1.5 3 1.5 3v3c-4 1.5-7.255 2.508-8 4-1 2-1 4.057-1 4.057H12z"/>
</svg>
  )
export default People;