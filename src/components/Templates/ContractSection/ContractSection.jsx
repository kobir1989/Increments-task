import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Icon from '../../Atoms/Icons/Icon';
import Button from '../../Atoms/Button/Button';
import Chip from '../../Atoms/Chip/Chip';

const StyledSection = styled('section')({
  display: 'flex',
  justifyContent: 'space-around',
});
const StyledUl = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  boxShadow: ' 0px 12.6px 31.6px rgba(10, 116, 243, 0.15)',
  width: '22.93rem',
  height: '22.90rem',
  padding: '1rem 1.68rem',
  borderRadius: '12px',
  position: 'relative',
  backgroundColor: '#dddddd1a',
  border: '0.8px solid #DDDDDD',
});
const StyledItem = styled('li')({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  fontSize: '1rem',
  fontWeight: '500',
  fontFamily: 'Poppins',
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

const StyledText = styled('span')(({ theme }) => ({
  fontSize: '2.5rem',
  color: theme.palette.text.main,
  fontWeight: 400,
  fontFamily: 'Poppins',
}));

const ContractSection = () => {
  return (
    <StyledSection>
      <StyledUl>
        <StyledItem>
          <StyledSpan background='#a398e4a4'>
            <Icon name='clockIcon' />
          </StyledSpan>
          Save Time and Money
        </StyledItem>
        <StyledItem>
          <StyledSpan background='#FEE3C1'>
            <Icon name='clockIcon' />
          </StyledSpan>
          Best Advice That Matters
        </StyledItem>
        <StyledItem>
          <StyledSpan background='#B4F3F6'>
            <Icon name='clockIcon' />
          </StyledSpan>
          Private and Confidential calls
        </StyledItem>
        <StyledItem>
          <StyledSpan background='#E0C1F4'>
            <Icon name='clockIcon' />
          </StyledSpan>
          Instant Advice
        </StyledItem>
        <Box
          sx={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            background: '#FFF',
            padding: '0.2rem',
            width: '8.25rem',
            height: '8.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.5rem',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            zIndex: 5,
          }}
        >
          <img src='/assets/svg/Vector (9).svg' alt='person' />
        </Box>
        <Box sx={{ position: 'absolute', left: '7.5rem', top: '4rem' }}>
          <img src='/assets/svg/shape.svg' alt='shapes' />
        </Box>
        <Box sx={{ position: 'absolute', right: '-10rem' }}>
          <Chip color='#FF9A61' text='Call' iconName='callIcon' />
        </Box>
        <Box sx={{ position: 'absolute', right: '-17.6rem', bottom: '2rem' }}>
          <Chip color='#FF385C' text='Documentation' iconName='editIcon' />
        </Box>
        <Box sx={{ position: 'absolute', left: '0', bottom: '0' }}>
          <Chip color='#1AA260' text='Video Call' iconName='videoIcon' />
        </Box>
      </StyledUl>

      <Box
        sx={{
          maxWidth: '27rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.6rem',
        }}
      >
        <Typography variant='h1' fontWeight='600' color='#DC1F27'>
          <StyledText>
            Connect with our <br />
          </StyledText>
          Legal Advisors
        </Typography>
        <Typography variant='body1' color='#425066' fontFamily='Poppins'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          voluptate atque ipsum explicabo accusantium,
        </Typography>
        <Box>
          <Button variant='contained'>Talk to lawyer</Button>
        </Box>
      </Box>
    </StyledSection>
  );
};

export default ContractSection;
