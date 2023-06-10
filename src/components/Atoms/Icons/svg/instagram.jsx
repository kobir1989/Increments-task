const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={60}
    height={60}
    fill='none'
    {...props}
  >
    <rect width={60} height={60} fill='#FF385C' rx={30} />
    <g fill='#fff' clipPath='url(#a)'>
      <path d='M29.5 25.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z' />
      <path
        fillRule='evenodd'
        d='M24.7 17.5a7.2 7.2 0 0 0-7.2 7.2v9.6a7.2 7.2 0 0 0 7.2 7.2h9.6a7.2 7.2 0 0 0 7.2-7.2v-9.6a7.2 7.2 0 0 0-7.2-7.2h-9.6Zm-.8 12a5.6 5.6 0 1 1 11.2 0 5.6 5.6 0 0 1-11.2 0Zm11.2-5.6h1.6v-1.6h-1.6v1.6Z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M17.5 17.5h24v24h-24z' />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
