import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';

const Widget = ({ title, description }) => {
  return (
    <Stack
      direction='row'
      gap='1.25rem'
      alignItems='center'
      justifyContent='space-between'
      width='16.5rem'
      sx={(theme) => ({
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
        backgroundColor: theme.palette.primary.contrastText,
        padding: '0.56rem',
        borderRadius: '4px',
      })}
    >
      <Box>
        <Icon name='callIcon' />
      </Box>
      <Box>
        <Typography variant='body1' fontWeight='400'>
          {title}
        </Typography>
        <Typography color='#898989' variant='small'>
          {description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default Widget;
