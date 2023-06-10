import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';

const StyledSection = styled('section')({
  backgroundImage: `url('/assets/svg/footer.svg')`,
  height: '65vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: '100vw auto',
  marginTop: '3rem',
});

const Footer = () => {
  return (
    <StyledSection>
      <Box sx={{ textAlign: 'center', pt: '1.56rem' }}>
        <Typography
          variant='h3'
          fontSize='2.5rem'
          fontWeight='400'
          color='#425066'
        >
          Why choose us
        </Typography>
      </Box>
      <Stack width='65%' margin='auto' p='2rem 0'>
        <img
          src='/assets/svg/footer-svg.svg'
          alt='info'
          style={{ width: '100%', height: '100%' }}
        />
      </Stack>
    </StyledSection>
  );
};

export default Footer;
