const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={12}
    fill='none'
    {...props}
  >
    <path
      fill='#49454F'
      fillRule='evenodd'
      d='M18 10v2H0v-2h18Zm0-5H0v2h18V5Zm0-5H0v2h18V0Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgComponent;
