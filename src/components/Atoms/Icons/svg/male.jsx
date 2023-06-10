const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={16}
    fill='none'
    {...props}
  >
    <path
      fill='#1C1B1F'
      d='M16 0v6h-2V3.425l-3.975 3.95c.317.467.558.963.725 1.488.167.524.25 1.07.25 1.637 0 1.533-.533 2.833-1.6 3.9C8.333 15.467 7.033 16 5.5 16s-2.833-.533-3.9-1.6C.533 13.333 0 12.033 0 10.5s.533-2.833 1.6-3.9C2.667 5.533 3.967 5 5.5 5c.55 0 1.092.08 1.625.237a4.714 4.714 0 0 1 1.475.738L12.575 2H10V0h6ZM5.5 7c-.967 0-1.792.342-2.475 1.025A3.372 3.372 0 0 0 2 10.5c0 .967.342 1.792 1.025 2.475A3.372 3.372 0 0 0 5.5 14c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0 0 9 10.5c0-.967-.342-1.792-1.025-2.475A3.372 3.372 0 0 0 5.5 7Z'
    />
  </svg>
);
export default SvgComponent;