import { Stack, Box, Typography, Rating } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import Icon from '../../Atoms/Icons/Icon';

const StyledSpan = styled('span')({
  marginBottom: '0.5rem',
});

const TestimonialCard = ({ name, company, comment }) => {
  return (
    <Stack
      sx={{
        width: '23.12rem',
        position: 'relative',
        boxShadow: '0px 0px 8px rgba(10, 116, 243, 0.25)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-3.1rem',
          left: '50%',
          width: '6.25rem',
          height: '6.25rem',
          borderRadius: '50%',
          transform: 'translate(-50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: ' 5px solid #FFFFFF',
          filter: ' drop-shadow(0px 0px 8px rgba(10, 116, 243, 0.25))',
        }}
      >
        <img
          src='/assets/users-images/user1.jpg'
          alt='user'
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        sx={{
          borderBottom: '1px dashed #DDDDDD',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: '4rem',
          pb: '1rem',
        }}
      >
        <Typography
          variant='h4'
          fontFamily='Poppins'
          fontSize='1.25rem'
          fontWeight='600'
        >
          {name}
        </Typography>
        <Typography
          fontFamily='Poppins'
          variant='body1'
          color='#777777'
          mb='0.5rem'
        >
          {company}
        </Typography>
        <Rating value={5} readOnly size='small' />
      </Box>

      <Box p='1rem'>
        <StyledSpan>
          <Icon name='quoteIcon' color='#000000' />
        </StyledSpan>
        <Typography
          variant='body1'
          color='#212121'
          fontFamily='Poppins'
          letterSpacing='0.3px'
        >
          {comment}
        </Typography>
      </Box>
    </Stack>
  );
};

export default TestimonialCard;
