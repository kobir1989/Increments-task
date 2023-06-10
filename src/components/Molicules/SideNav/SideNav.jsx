import { Divider, IconButton, Stack } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';
import { useState } from 'react';
import LocationPopup from '../Popups/LocationPopup';
import ContractPopup from '../Popups/ContractPopup';
import DonationModal from '../Popups/DonationModal';

const SideNav = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isContractOpen, setIsContractOpen] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  //Location Popup Open Handler
  const toggleLocation = () => {
    setIsLocationOpen((prev) => !prev);
  };

  //Location Popup Close Handler
  const handleCloseLocation = () => {
    setIsLocationOpen(false);
  };

  //Contract Popup Open Handler
  const toggleContract = () => {
    setIsContractOpen((prev) => !prev);
  };

  //Contract Popup Close Handler
  const handleCloseContract = () => {
    setIsContractOpen(false);
  };
  //Donation Popup Open Handler
  const toggleDonation = () => {
    setIsDonationOpen((prev) => !prev);
  };

  //Donation Popup Close Handler
  const handleCloseDonation = () => {
    setIsDonationOpen(false);
  };

  return (
    <Stack
      direction='column'
      sx={(theme) => ({
        maxWidth: '4rem',
        background: theme.palette.primary.main,
        boxShadow: '0px 8px 16px rgba(220, 31, 39, 0.1)',
        borderRadius: '10px 0px 0px 10px',
      })}
    >
      <IconButton sx={{ p: '1.25rem' }} disableRipple onClick={toggleLocation}>
        <Icon name='location' color='#FFF' />
      </IconButton>
      <Divider
        sx={(theme) => ({
          background: theme.palette.primary.contrastText,
          height: '2px',
        })}
      />
      <IconButton sx={{ p: '1.25rem' }} disableRipple onClick={toggleContract}>
        <Icon name='callIconTwo' color='#FFF' />
      </IconButton>
      <Divider
        sx={(theme) => ({
          background: theme.palette.primary.contrastText,
          height: '2px',
        })}
      />
      <IconButton sx={{ p: '1.25rem' }} disableRipple onClick={toggleDonation}>
        <Icon name='volunteer' />
      </IconButton>

      {isLocationOpen && (
        <LocationPopup
          isOpen={isLocationOpen}
          handleClose={handleCloseLocation}
          toggleDrawer={toggleLocation}
        />
      )}
      {isContractOpen && (
        <ContractPopup
          isOpen={isContractOpen}
          handleClose={handleCloseContract}
          toggleDrawer={toggleContract}
        />
      )}
      {isDonationOpen && (
        <DonationModal
          isOpen={isDonationOpen}
          handleClose={handleCloseDonation}
          toggleDrawer={toggleDonation}
        />
      )}
    </Stack>
  );
};

export default SideNav;
