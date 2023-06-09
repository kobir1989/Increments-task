import Hero from '../components/Templates/Hero/Hero';
import Layout from '../components/Templates/Layout/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Layout>
      <Box>
        <Slider {...settings}>
          <Hero
            bgimage='/assets/svg/cover1.svg'
            roundedImage='/assets/svg/cover1-rounded.svg'
            buttonLabel='View Lawyer Profile'
          />
          <Hero
            bgimage='/assets/svg/cover2.svg'
            roundedImage='/assets/svg/cover2-rounded.svg'
            buttonLabel='Talk to Lawyer'
          />
          <Hero
            bgimage='/assets/svg/cover3.svg'
            roundedImage='/assets/svg/cover3-rounded.svg'
            buttonLabel='View Lawyer Profile'
          />
        </Slider>
      </Box>
    </Layout>
  );
};

export default Home;
