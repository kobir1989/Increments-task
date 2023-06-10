import Icon from '../../Atoms/Icons/Icon';
import MenuDropDown from './MenuDropDown';
import {
  Avatar,
  Box,
  ClickAwayListener,
  IconButton,
  Stack,
} from '@mui/material';

import { useState } from 'react';
import AvaterDropDown from './AvaterDropDown';

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMenuDropDown, setShowMenuDropDown] = useState(false);
  const [showAvaterDropDown, setShowAvaterDropDown] = useState(false);

  //menu drop down header
  const handleMenuDropDown = () => {
    setShowMenuDropDown(true);
  };

  //close menu drop down
  const handleCloseMenuDropDown = () => {
    setShowMenuDropDown(false);
    setIsCollapsed(false);
    setShowAvaterDropDown(false);
  };

  //avater drop down header
  const handleAvaterDropDown = () => {
    setShowAvaterDropDown((prev) => !prev);
  };
  return (
    <ClickAwayListener onClickAway={handleCloseMenuDropDown}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: '#FAFAFA',
          padding: '0 3.18rem',
          height: '3.75rem',
          boxShadow: ' 0px 8px 16px rgba(0, 0, 0, 0.15)',
          borderRadius: '4px',
          position: 'relative',
          width: '100%',
        }}
      >
        <Stack direction='row' alignItems='center' gap='2.43rem'>
          <IconButton p={0} disableRipple onClick={handleMenuDropDown}>
            <Icon name='menuIcon' />
          </IconButton>
          <Box>
            <img src='/assets/svg/logo.svg' alt='logo' />
          </Box>
        </Stack>
        <IconButton p={0} disableRipple onClick={handleAvaterDropDown}>
          <Avatar
            sx={{
              width: '2.87rem',
              height: '2.87rem',
              border: '2px solid #DC1F27',
            }}
            src='/assets/users-images/user1.jpg'
          />
        </IconButton>
        {showMenuDropDown && (
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              left: '2rem',
            }}
          >
            <MenuDropDown
              showNestedDropDown={showMenuDropDown}
              onClose={handleCloseMenuDropDown}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          </Box>
        )}
        {showAvaterDropDown && (
          <Box
            sx={{
              position: 'absolute',
              top: '120%',
              right: '2rem',
              zIndex: '1',
            }}
          >
            <AvaterDropDown showAvaterDropDown={showAvaterDropDown} />
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default Navigation;
