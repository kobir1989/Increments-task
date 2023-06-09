import { Box } from '@mui/material';
import SideNav from '../../Molicules/SideNav/SideNav';
import Navigation from '../../Organisms/Navigation/Navigation';
import styled from '@emotion/styled';

const StyledNav = styled('nav')({
  position: 'fixed',
  width: '98%',
  top: '1rem',
  left: '50%',
  transform: 'translate(-50%)',
  zIndex: '100',
});

const StyledMain = styled('main')({
  overflow: 'hidden',
});

const Layout = ({ children }) => {
  return (
    <>
      <StyledNav>
        <Navigation />
      </StyledNav>

      <StyledMain>
        <Box
          sx={{
            position: 'fixed',
            right: '0',
            top: '50%',
            transform: 'translate(0, -50%)',
            zIndex: '1',
          }}
        >
          <SideNav />
        </Box>
        {children}
      </StyledMain>
    </>
  );
};

export default Layout;
