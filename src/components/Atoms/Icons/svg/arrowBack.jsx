const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={20}
    fill='none'
    {...props}
  >
    <path
      fill='#1C1B1F'
      d='M10 20 0 10 10 0l1.775 1.775L3.55 10l8.225 8.225L10 20Z'
    />
  </svg>
);
export default SvgComponent;
