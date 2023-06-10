import styled from '@emotion/styled';
import { Box, Stack, Typography } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';
import MuiTab from '../../Organisms/MuiTab/MuiTab';

const StyledText = styled('span')({
  fontWeight: '300',
  color: '#425066',
});

const StyledUl = styled('ul')({
  marginTop: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

const StyledItem = styled('li')({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  fontSize: '1rem',
  fontWeight: '400',
  fontFamily: 'Poppins',
  color: '#425066',
});

const StyledSpan = styled('span')(({ background }) => ({
  backgroundColor: background,
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: background,
}));

const PricingSection = () => {
  return (
    <section>
      <Box mb='4rem' textAlign='center'>
        <Typography
          variant='h2'
          color='#DC1F27'
          fontWeight='600'
          fontFamily='Poppins'
        >
          <StyledText>Pick the slot to get </StyledText>
          expert solution
        </Typography>
      </Box>

      <Stack direction='row' justifyContent='space-around'>
        <Box sx={{ maxWidth: '22rem' }}>
          <Typography
            variant='h4'
            fontSize='1.62rem'
            color='#425066'
            fontWeight='400'
            fontFamily='Poppins'
            lineHeight='2.43rem'
          >
            Right leagal advice today will save your big cost tomorrow.
          </Typography>
          <StyledUl>
            <StyledItem>
              <StyledSpan background='#FEE3C1'>
                <Icon name='callIcon' color='#FF9A61' />
              </StyledSpan>
              73k Calls Connected
            </StyledItem>
            <StyledItem>
              <StyledSpan background='#E7FBF9'>
                <Icon name='justiceIcon' color='#1AA260' />
              </StyledSpan>
              Positive Result
            </StyledItem>
            <StyledItem>
              <StyledSpan background='#FDE0F6'>
                <Icon name='starIcon' color='#F763CF' />
              </StyledSpan>
              4.6/5 Average Ratings
            </StyledItem>
          </StyledUl>
        </Box>
        {/* tab */}
        <Box
          sx={{
            width: '46rem',
            background: '#E7F5FF',
            borderRadius: '0.8rem',
          }}
        >
          <MuiTab />
        </Box>
      </Stack>
    </section>
  );
};

export default PricingSection;
