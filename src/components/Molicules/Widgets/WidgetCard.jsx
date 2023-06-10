import { Stack, Box, Typography } from '@mui/material';
import React from 'react';
import Icon from '../../Atoms/Icons/Icon';

const WidgetCard = ({
  iconName,
  title,
  description,
  background = '#FFEBE6',
}) => {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      gap='0.5rem'
      sx={{
        background: background,
        padding: '0.81rem  1.06rem',
        boxShadow: ' 0px 0px 6.93953px rgba(10, 116, 243, 0.25)',
        width: '16.37rem',
        borderRadius: '4px',
      }}
    >
      <Box
        sx={(theme) => ({
          background: theme.palette.primary.contrastText,
          width: '4rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        })}
      >
        <Icon name={iconName} />
      </Box>
      <Box>
        <Typography variant='h4' fontWeight='500' textAlign='center'>
          {title}
        </Typography>
        <Typography color='#777777' lineHeight='0.86rem' variant='small'>
          {description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default WidgetCard;
