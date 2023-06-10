import styled from '@emotion/styled';
import { Box, Grid, Stack, Typography } from '@mui/material';
import InfoCard from '../../Molicules/Cards/InfoCard';
import Button from '../../Atoms/Button/Button';

const StyledSection = styled('section')({
  padding: '0 4.5rem',
});

const StyledSpan = styled('span')({
  color: '#425066',
  fontWeight: '300',
});
const InfoSection = () => {
  return (
    <StyledSection>
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant='h2'
          color='#DC1F27'
          fontWeight='600'
          fontFamily='Poppins'
        >
          <StyledSpan>
            Experience a smart <br />
          </StyledSpan>
          Legal solution platform in your hand
        </Typography>
      </Box>
      <Stack pt='3rem' maxWidth={'1500px'} margin='auto'>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid
            item
            xs={4}
            sx={{
              borderRight: '1px solid #DDDDDD',
              borderBottom: '1px solid #DDDDDD',
            }}
          >
            <InfoCard
              iconName='immigrationIcon'
              iconColor='#AE8644'
              title='Imigration assistance'
              subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              background='#FFF4E2'
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              borderRight: '1px solid #DDDDDD',
              borderBottom: '1px solid #DDDDDD',
            }}
          >
            <InfoCard
              iconName='houseIcon'
              iconColor='#58C5BA'
              title='Intellectual proparty'
              subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              background='#E7FBF9'
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              borderBottom: '1px solid #DDDDDD',
            }}
          >
            <InfoCard
              iconName='justiceIcon'
              iconColor='#C682B5'
              title='Complaince lawyer'
              subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              background='#FDE0F6'
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              borderRight: '1px solid #DDDDDD',
            }}
          >
            <InfoCard
              iconName='noteIcon'
              iconColor='#524A98 '
              title='Making a will'
              subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
              background='#C8C4E9'
            />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              borderRight: '1px solid #DDDDDD',
            }}
          >
            <InfoCard
              iconName='editIcon'
              iconColor='#FFF'
              title='Legal documentation'
              subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit..'
              background='#E0C1F4'
            />
          </Grid>
          <Grid item xs={4}>
            <InfoCard
              iconName='propartyIcon'
              iconColor='#827AC7'
              title='Estate planning'
              subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis.'
              background='#C8C4E9'
            />
          </Grid>
        </Grid>
      </Stack>
      <Stack margin='auto' width='13rem' pt={8}>
        <Button variant='contained'>Talk to lawyer</Button>
      </Stack>
    </StyledSection>
  );
};

export default InfoSection;
