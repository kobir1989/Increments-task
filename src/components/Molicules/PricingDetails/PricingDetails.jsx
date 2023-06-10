import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../../Atoms/Icons/Icon';
import styled from '@emotion/styled';

const StyledSpan = styled('span')({
  fontSize: '1.5rem',
  fontWeight: '400',
});

const PricingDetails = ({ price, background, packageName }) => {
  return (
    <Box
      sx={{
        padding: '1.9rem',
        height: '22rem',
        background: background,
        borderRadius: '0.5rem',
        color: '#FFF',
      }}
    >
      <Box>
        <Typography variant='h2' fontSize='2.2rem' fontWeight='400'>
          {packageName}
        </Typography>
        <Typography variant='h1' fontSize='2.62rem' lineHeight='2.8rem'>
          ${price}
          <StyledSpan>/mo</StyledSpan>
        </Typography>
        <Stack mt='3.56rem' gap='0.8rem'>
          <Stack direction='row' gap='0.75rem' alignItems='center'>
            <Icon name='checkedIcon' />
            <Typography variant='body1' fontSize='1rem'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              dolorem.
            </Typography>
          </Stack>
          <Stack direction='row' gap='0.75rem' alignItems='center'>
            <Icon name='checkedIcon' />
            <Typography variant='body1' fontSize='1rem'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              dolorem.
            </Typography>
          </Stack>
          <Stack direction='row' gap='0.75rem' alignItems='center'>
            <Icon name='checkedIcon' />
            <Typography variant='body1' fontSize='1rem'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              dolorem.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default PricingDetails;
