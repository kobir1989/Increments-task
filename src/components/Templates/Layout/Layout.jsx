import { Box, IconButton } from '@mui/material';
import SideNav from '../../Molicules/SideNav/SideNav';
import Navigation from '../../Organisms/Navigation/Navigation';
import styled from '@emotion/styled';
import { useState } from 'react';
import Icon from '../../Atoms/Icons/Icon';
import SocialIconsGroup from '../../Molicules/SocialIconsGroup/SocialIconsGroup';

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
  const [isIconExpand, setIsIconExpand] = useState(false);
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
        <Box
          sx={(theme) => ({
            width: '5rem',
            height: '5rem',
            background: theme.palette.primary.main,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '4.31rem',
            bottom: '2.18rem',
            zIndex: 100,
          })}
        >
          <IconButton
            disableRipple
            onClick={() => setIsIconExpand((prev) => !prev)}
            sx={{ position: 'relative' }}
          >
            <Icon
              name={isIconExpand ? 'closeIcon' : 'addIcon'}
              style={{
                color: '#FFF',
                fontSize: '1.8rem',
              }}
            />
          </IconButton>
          <Box
            sx={{
              position: 'absolute',
              top: '-20rem',
              left: '50%',
              transform: 'translate(-50%)',
            }}
          >
            {isIconExpand && <SocialIconsGroup isIconExpand={isIconExpand} />}
          </Box>
        </Box>
        {children}
      </StyledMain>
    </>
  );
};

export default Layout;
