import * as React from 'react';
const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={16}
    fill='none'
    {...props}
  >
    <path
      fill='#1C1B1F'
      d='M12.5 7.95a5.686 5.686 0 0 0 1.113-1.825A5.961 5.961 0 0 0 14 4c0-.733-.13-1.442-.387-2.125A5.686 5.686 0 0 0 12.5.05c1 .133 1.833.575 2.5 1.325S16 3 16 4s-.333 1.875-1 2.625a3.938 3.938 0 0 1-2.5 1.325ZM18 16v-3c0-.6-.133-1.17-.4-1.713a5.111 5.111 0 0 0-1.05-1.437c.85.3 1.637.688 2.363 1.162C19.637 11.488 20 12.15 20 13v3h-2Zm2-7V7h-2V5h2V3h2v2h2v2h-2v2h-2ZM8 8c-1.1 0-2.042-.392-2.825-1.175C4.392 6.042 4 5.1 4 4s.392-2.042 1.175-2.825C5.958.392 6.9 0 8 0s2.042.392 2.825 1.175C11.608 1.958 12 2.9 12 4s-.392 2.042-1.175 2.825C10.042 7.608 9.1 8 8 8Zm-8 8v-2.8c0-.567.146-1.087.438-1.563.291-.475.679-.837 1.162-1.087a14.844 14.844 0 0 1 3.15-1.163A13.759 13.759 0 0 1 8 9c1.1 0 2.183.13 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.476.438.996.438 1.563V16H0ZM8 6c.55 0 1.02-.196 1.412-.588C9.804 5.021 10 4.55 10 4c0-.55-.196-1.02-.588-1.413A1.926 1.926 0 0 0 8 2c-.55 0-1.02.196-1.412.587A1.926 1.926 0 0 0 6 4c0 .55.196 1.02.588 1.412C6.979 5.804 7.45 6 8 6Zm-6 8h12v-.8a.973.973 0 0 0-.5-.85c-.9-.45-1.808-.787-2.725-1.012a11.6 11.6 0 0 0-5.55 0c-.917.225-1.825.562-2.725 1.012a.973.973 0 0 0-.5.85v.8Z'
    />
  </svg>
);
export default SvgComponent;