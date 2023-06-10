import React from 'react';
import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import TestimonialCard from '../../Molicules/Cards/TestimonialCard';

const StyledSection = styled('section')({
  maxWidth: '1280px',
  margin: 'auto',
  padding: '0 2rem',
});

const StyledText = styled('span')({
  fontWeight: '300',
  color: '#425066',
});

const TestimonialSection = () => {
  return (
    <StyledSection>
      <Box mb='5rem' textAlign='center'>
        <Typography
          variant='h2'
          color='#DC1F27'
          fontWeight='600'
          fontFamily='Poppins'
        >
          <StyledText>
            Success Stories <br />
          </StyledText>
          To Know About Our Lawyears
        </Typography>
      </Box>
      <Stack
        direction='row'
        gap='1.87rem'
        alignItems='center'
        justifyContent='space-between'
        mb={4}
      >
        <TestimonialCard
          name='Yogesh Arora'
          company='Smartyields Agro Pvt Ltd | Incorporation'
          comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nulla cumque facilis fugiat incidunt voluptatibus beatae dolore assumenda quasi minima.'
        />
        <TestimonialCard
          name='Yogesh Arora'
          company='Smartyields Agro Pvt Ltd | Incorporation'
          comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nulla cumque facilis fugiat incidunt voluptatibus beatae dolore assumenda quasi minima.'
        />
        <TestimonialCard
          name='Yogesh Arora'
          company='Smartyields Agro Pvt Ltd | Incorporation'
          comment='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nulla cumque facilis fugiat incidunt voluptatibus beatae dolore assumenda quasi minima.'
        />
      </Stack>
    </StyledSection>
  );
};

export default TestimonialSection;
