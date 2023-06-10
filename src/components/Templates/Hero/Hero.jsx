import styled from '@emotion/styled';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import Widget from '../../Molicules/Widgets/Widget';
import Button from '../../Atoms/Button/Button';

const StyledSection = styled('section')(({ theme, bgimage }) => ({
  backgroundImage: `url(${bgimage})`,
  height: '80vh',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: '100vw',
  position: 'relative',
  [theme.breakpoints.up('xxxl')]: {
    height: '110vh',
  },
}));

const Hero = ({ bgimage, roundedImage, buttonLabel }) => {
  return (
    <StyledSection bgimage={bgimage}>
      <Stack
        pt='10.37rem'
        direction='row'
        width='100%'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box
          ml='5.81rem'
          color='#FFF'
          maxWidth='28rem'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <Typography variant='h4'>Lorem ipsum, dolor sit</Typography>
          <Typography variant='h3' fontWeight='600' fontFamily='Poppins'>
            Lorem ipsum, dolor sit amet consectetur
          </Typography>
          <Typography variant='h4'>Consult a Lawyer now</Typography>
          <Box
            display='flex'
            alignItems='center'
            sx={{
              position: 'relative',
              mt: '0.6rem',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: ' 16.2rem',
                width: '10px',
                height: '10px',
                backgroundColor: '#00FB0C',
                borderRadius: ' 50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '10',
              },
            }}
          >
            <Avatar
              src='/assets/users-images/user-2.png'
              sx={{ width: '2.5rem', height: '2.5rem' }}
            />
            <Avatar
              src='/assets/users-images/user-3.png'
              sx={{ ml: '-0.8rem', width: '2.5rem', height: '2.5rem' }}
            />
            <Avatar
              src='/assets/users-images/user-2.png'
              sx={{ ml: '-0.8rem', width: '2.5rem', height: '2.5rem' }}
            />
            <Typography ml={1} variant='small' fontFamily='Poppins'>
              +121 Lawyers online now
            </Typography>
          </Box>
          <Box mt='1rem'>
            <Button variant='contained'>{buttonLabel}</Button>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: '50%',
            border: '10px solid #FFF',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            mr: '2%',
          }}
        >
          <img
            src={roundedImage}
            alt='cover-rounded'
            width={380}
            height={380}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
          <Stack
            gap='1.25rem'
            sx={{
              position: 'absolute',
              left: '-20%',
              top: '50%%',
              transform: 'translate(-50%)',
            }}
          >
            <Widget
              title='Lorem ipsum dolor'
              description='Lorem ipsum dolor sit amet consectetur '
              iconName='callIcon'
              iconColor='#FF9A61'
            />
            <Widget
              title='Lorem ipsum dolor'
              description='Lorem ipsum dolor sit amet consectetur '
              iconName='editIcon'
              iconColor=' #FF385C'
            />
            <Widget
              title='Lorem ipsum dolor'
              description='Lorem ipsum dolor sit amet consectetur '
              iconName='videoIcon'
              iconColor='#239FDB'
            />
          </Stack>
        </Box>
      </Stack>
    </StyledSection>
  );
};

export default Hero;
