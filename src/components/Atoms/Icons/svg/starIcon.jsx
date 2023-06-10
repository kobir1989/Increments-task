import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={21}
    fill='none'
    {...props}
  >
    <path
      style={{ fill: 'currentcolor' }}
      d='M20.75 8.155h-7.633L10.75.5 8.383 8.155H.75l6.167 4.724L4.583 20.5l6.167-4.724 6.167 4.724-2.367-7.655 6.2-4.69Z'
    />
  </svg>
);
export default SvgComponent;
