import { Box, Stack, Typography } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';

const InfoCard = ({ background, title, subTitle, iconColor, iconName }) => {
  return (
    <Stack gap='1.1rem' maxWidth='19rem' p='2.5rem'>
      <Box
        sx={{
          background: background,
          borderRadius: '6px',
          width: '4.1rem',
          height: '4.1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Icon name={iconName} color={iconColor} />
      </Box>
      <Stack gap={1}>
        <Typography
          variant='h4'
          fontSize='1rem'
          fontWeight='500'
          fontFamily='Poppins'
        >
          {title}
        </Typography>
        <Typography variant='body' fontSize='0.87rem' lineHeight={1.5}>
          {subTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default InfoCard;
