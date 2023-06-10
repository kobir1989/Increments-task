import { Stack, Slide, Box } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';

const icon = (
  <Stack gap={2}>
    <Icon name='facebook' />
    <Icon name='linkedIn' />
    <Icon name='instagram' />
    <Icon name='twitter' />
  </Stack>
);
const SocialIconsGroup = ({ isIconExpand }) => {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Slide in={isIconExpand} direction='up'>
        {icon}
      </Slide>
    </Box>
  );
};

export default SocialIconsGroup;
