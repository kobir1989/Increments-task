import React from 'react';
import Drawer from '../Drawer/Drawer';

const DonationModal = ({ isOpen, toggleDrawer, handleClose }) => {
  return (
    <Drawer onOpen={toggleDrawer} isOpen={isOpen} onClose={handleClose}>
      Donation
    </Drawer>
  );
};

export default DonationModal;
