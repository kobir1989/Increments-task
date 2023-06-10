const SvgComponent = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={31}
    fill='none'
    {...props}
  >
    <path
      style={{ fill: 'currentcolor' }}
      fillRule='evenodd'
      d='M22.059 30.5H2.94c-.78 0-1.528-.275-2.08-.764C.31 29.246 0 28.583 0 27.89V3.11c0-.692.31-1.356.861-1.845C1.413.774 2.161.5 2.941.5h13.97c.236 0 .437.105.571.258l7.228 6.41a.667.667 0 0 1 .212.223c.05.088.077.184.078.283V27.89c0 .692-.31 1.356-.861 1.845-.552.49-1.3.764-2.08.764ZM17.647 2.705v4.317h4.867l-4.867-4.317Zm5.882 5.621h-6.617a.786.786 0 0 1-.52-.19.617.617 0 0 1-.215-.462v-5.87H2.94c-.39 0-.764.138-1.04.382-.275.245-.43.577-.43.923V27.89c0 .346.155.678.43.923.276.244.65.382 1.04.382H22.06c.39 0 .764-.138 1.04-.382.276-.245.43-.577.43-.923V8.326Zm-4.411 16.957H5.882a.785.785 0 0 1-.52-.191.617.617 0 0 1-.215-.462c0-.172.078-.338.215-.46a.785.785 0 0 1 .52-.192h13.236c.195 0 .382.069.52.191a.617.617 0 0 1 .215.461.617.617 0 0 1-.215.462.785.785 0 0 1-.52.19Zm0-5.218H5.882a.785.785 0 0 1-.52-.19.617.617 0 0 1-.215-.462c0-.173.078-.339.215-.461a.785.785 0 0 1 .52-.191h13.236c.195 0 .382.069.52.19a.617.617 0 0 1 .215.462.617.617 0 0 1-.215.461.785.785 0 0 1-.52.191Zm0-5.217H5.882a.785.785 0 0 1-.52-.191.617.617 0 0 1-.215-.461c0-.173.078-.34.215-.461a.785.785 0 0 1 .52-.191h13.236c.195 0 .382.068.52.19a.617.617 0 0 1 .215.462.617.617 0 0 1-.215.46.785.785 0 0 1-.52.192Z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgComponent;
