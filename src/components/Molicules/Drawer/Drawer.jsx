import { Drawer as MuiDrawer } from '@mui/material';

const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <MuiDrawer
      anchor='right'
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          height: '82vh',
          width: '35%',
          borderRadius: '12px',
          top: '50%',
          transform: 'translate(0,-50%)',
        },
      }}
      transitionDuration={{
        enter: 300,
        exit: 300,
      }}
    >
      {children}
    </MuiDrawer>
  );
};
export default Drawer;
