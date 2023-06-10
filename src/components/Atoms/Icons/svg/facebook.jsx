const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={60}
    height={60}
    fill='none'
    {...props}
  >
    <rect width={60} height={60} fill='#FF385C' rx={30} />
    <path
      fill='#fff'
      d='M32 31.5h2.5l1-4H32v-2c0-1.03 0-2 2-2h1.5v-3.36c-.326-.043-1.557-.14-2.857-.14C29.928 20 28 21.657 28 24.7v2.8h-3v4h3V40h4v-8.5Z'
    />
  </svg>
);
export default SvgComponent;
