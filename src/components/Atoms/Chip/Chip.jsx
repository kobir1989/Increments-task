import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Icon from '../Icons/Icon';

const Chip = ({ color, text, iconName }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      gap='1rem'
      sx={{
        borderRadius: '8px',
        padding: '1rem 0.8rem',
        fontSize: '1.5rem',
        fontWeight: '500',
        fontFamily: 'Poppins',
        height: '4.62rem',
        backgroundColor: '#FFF',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        minWidth: '10rem',
      }}
    >
      <Box
        sx={{
          background: color,
          padding: '0.2rem',
          borderRadius: '0.8rem',
          width: '2.75rem',
          height: '2.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name={iconName} color='#FFF' />
      </Box>
      <Typography variant='h5' fontSize={'1rem'} fontWeight='500' color={color}>
        {text}
      </Typography>
    </Stack>
  );
};

export default Chip;
