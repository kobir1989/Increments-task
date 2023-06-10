import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import Icon from '../../Atoms/Icons/Icon';
import { dropDownListItems } from '../../../staticData/staticData';

const MenuDropDown = ({
  onClose,

  isCollapsed,
  setIsCollapsed,
}) => {
  return (
    <Box
      sx={{
        background: '#fff',
        width: isCollapsed ? '13rem' : '5rem',
        borderRadius: ' 0px 12px 12px 0px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        padding: '1.37rem 0 1rem 0',
        transition: 'all 0.1s ease-in-out',
      }}
    >
      {isCollapsed ? (
        <Stack alignItems='flex-end' pr='1.2rem' pb={2}>
          <IconButton
            sx={{ p: 0 }}
            disableRipple
            onClick={() => {
              setIsCollapsed(false);
            }}
          >
            <Icon name='arrowBack' />
          </IconButton>
        </Stack>
      ) : (
        <Stack justifyContent='center' alignItems='center' pb='2rem'>
          <IconButton sx={{ p: 0 }} disableRipple onClick={onClose}>
            <Icon name='closeIcon' />
          </IconButton>
        </Stack>
      )}

      <Stack
        justifyContent='center'
        alignItems='center'
        gap='1rem'
        padding='1rem 1.5rem 1rem 1.5rem'
      >
        {dropDownListItems.map((Option, index) => (
          <Stack
            key={index}
            direction='row'
            alignItems='center'
            gap='0.5rem'
            width='100%'
          >
            <IconButton
              key={index}
              sx={{ p: 0 }}
              disableRipple
              onClick={() => setIsCollapsed(true)}
            >
              <img
                src={Option?.imgUrl}
                alt={Option?.alt}
                width={32}
                height={32}
              />
            </IconButton>

            {isCollapsed && (
              <Typography variant='body1' fontWeight='500'>
                {Option?.title}
              </Typography>
            )}
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default MenuDropDown;
