import Icon from '../../Atoms/Icons/Icon';
import Drawer from '../Drawer/Drawer';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import SelectOptions from '../../Atoms/SelectOptions/SelectOptions';
import { useState } from 'react';
import { addressOption } from '../../../staticData/options';

const LocationPopup = ({ toggleDrawer, isOpen, handleClose }) => {
  const [options, setOptions] = useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };
  return (
    <Drawer onOpen={toggleDrawer} isOpen={isOpen} onClose={handleClose}>
      <Box
        width={'100%'}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem 2rem',
        }}
      >
        <Stack direction='row' gap={1}>
          <span>
            <Icon name='location' color='#DC1F27' />
          </span>
          <Typography variant='body1' color='#DC1F27'>
            Location
          </Typography>
        </Stack>
        <IconButton disableRipple sx={{ p: 0 }} onClick={handleClose}>
          <Icon name='closeIcon' />
        </IconButton>
      </Box>
      <Box sx={{ padding: '1.5rem 2rem' }}>
        <SelectOptions
          onChangeHandler={handleChange}
          options={options}
          optionArray={addressOption}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          p: '0 1.5rem',
          overflow: 'hidden',
        }}
      >
        <img
          src='/assets/svg/Mapsicle Map.svg'
          alt='map'
          style={{ width: '100%', height: '100%' }}
        />
      </Box>
    </Drawer>
  );
};

export default LocationPopup;
