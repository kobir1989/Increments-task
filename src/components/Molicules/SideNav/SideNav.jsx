import { Divider, IconButton, Stack } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';

const SideNav = () => {
  return (
    <Stack
      direction='column'
      sx={(theme) => ({
        maxWidth: '4rem',
        background: theme.palette.primary.main,
        boxShadow: '0px 8px 16px rgba(220, 31, 39, 0.1)',
        borderRadius: '10px 0px 0px 10px',
      })}
    >
      <IconButton sx={{ p: '1.25rem' }} disableRipple>
        <Icon name='location' />
      </IconButton>
      <Divider
        sx={(theme) => ({
          background: theme.palette.primary.contrastText,
          height: '2px',
        })}
      />
      <IconButton sx={{ p: '1.25rem' }} disableRipple>
        <Icon name='callIconTwo' />
      </IconButton>
      <Divider
        sx={(theme) => ({
          background: theme.palette.primary.contrastText,
          height: '2px',
        })}
      />
      <IconButton sx={{ p: '1.25rem' }} disableRipple>
        <Icon name='volunteer' />
      </IconButton>
    </Stack>
  );
};

export default SideNav;
