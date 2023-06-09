import { Box, Divider, Fade, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Icon from '../../Atoms/Icons/Icon';

const StyledUl = styled('styled')({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});
const StyledLi = styled('li')({
  display: 'flex',
  gap: '0.87rem',
  alignItems: 'center',
  fontSize: '0.75rem',
  fontWeight: '400',
  padding: '0.5rem 0.8rem',
  borderRadius: '4px',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#FFFBFE',
    boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease-in-out',
  },
});
const AvaterDropDown = ({ showAvaterDropDown }) => {
  return (
    <Fade in={showAvaterDropDown}>
      <Box
        sx={{
          width: '16.87rem',
          backgroundColor: '#fff',
          borderRadius: '0.75rem',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          p: '1.87rem 1rem',
          zIndex: 10,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-10px',
            right: '13%',
            transform: 'translateX(-13%)',
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom: '10px solid #D9D9D9',
          },
        }}
      >
        <StyledUl>
          <StyledLi>
            <span>
              <Icon name='accountCircle' />
            </span>
            <Typography variant='body1'>Profile</Typography>
          </StyledLi>
          <StyledLi>
            <span>
              <Icon name='myAccount' />
            </span>
            <Typography variant='body1'>My Account</Typography>
          </StyledLi>
          <Divider color='#DC1F27' sx={{ opacity: '0.3' }} />
          <StyledLi>
            <span>
              <Icon name='addAccount' />
            </span>
            <Typography variant='body1'>Add Anouther Account</Typography>
          </StyledLi>
          <StyledLi>
            <span>
              <Icon name='settings' />
            </span>
            <Typography variant='body1'>Settings</Typography>
          </StyledLi>
          <StyledLi>
            <span>
              <Icon name='logout' />
            </span>
            <Typography variant='body1'>Logout</Typography>
          </StyledLi>
        </StyledUl>
      </Box>
    </Fade>
  );
};

export default AvaterDropDown;
