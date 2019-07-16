import React from 'react';

const ChildIcon = ({
  style = {},
  height = '50px'
}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      style={ style }
      height={ height }
      fill="none"
      stroke="#fff"
    >
      <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"><path d="M11.51.48h-.018C9.45 3.016 5.832 4.025 1.5 1v14.812s1.45 5.27 10 7.668c8.55-2.396 10-7.668 10-7.668V1c-4.307 3.008-7.945 2.023-9.99-.52z"></path><path d="M17.535 8.47L11.5 17.2l-4.578-4.58"></path></g>
    </svg>
  )
export default ChildIcon;