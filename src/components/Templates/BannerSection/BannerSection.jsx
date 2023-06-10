import React from 'react';
import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import WidgetCard from '../../Molicules/Widgets/WidgetCard';

const StyledSection = styled('section')({
  maxWidth: '1400px',
  margin: 'auto',
  display: 'flex',
  gap: '8.62rem',
  alignItems: 'center',
});

const StyledSpan = styled('span')(({ theme }) => ({
  fontSize: '2.5rem',
  color: theme.palette.text.main,
  fontWeight: 400,
  fontFamily: 'Poppins',
}));
const BannerSection = () => {
  return (
    <StyledSection>
      <Stack maxWidth='30rem' padding={'0 2.18rem'} gap={3}>
        <Typography
          variant='h1'
          fontFamily='Poppins'
          color='#DC1F27'
          lineHeight='4.5rem'
        >
          <StyledSpan>Trust your future &</StyledSpan>
          <br /> Peaceful life
        </Typography>
        <Typography variant='body1' fontFamily='Poppins' color='#425066'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          debitis odio dolores animi natus dolor eaque itaque adipisci dolore
          ipsa!
        </Typography>
      </Stack>

      <Stack direction='row' gap='1.25rem' mt='-4rem' zIndex={10}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <WidgetCard
            iconName='immigrationIcon'
            title='Immigration'
            description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            background='#E6F9FF'
          />
          <WidgetCard
            iconName='propartyIcon'
            title='Proparty'
            description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            background='#FEF2E9'
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            mt: '-3rem',
          }}
        >
          <WidgetCard
            iconName='coupleIcon'
            title='Matrimonials'
            description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            background='#FFEBE6'
          />
          <WidgetCard
            iconName='personsIcon'
            title='Personal'
            description=' Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            background='#EAF3FE'
          />
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default BannerSection;
