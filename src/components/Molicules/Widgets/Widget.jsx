import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';

const Widget = ({ title, description, iconName = 'callIcon', iconColor }) => {
  return (
    <Stack
      direction='row'
      gap='1.25rem'
      alignItems='center'
      width='16.5rem'
      sx={(theme) => ({
        filter: 'drop-shadow(0px 0px 10px #000000)',
        backgroundColor: theme.palette.primary.contrastText,
        padding: '0.76rem 1.56rem',
        borderRadius: '4px',
      })}
    >
      <Box>
        <Icon name={iconName} color={iconColor} />
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
