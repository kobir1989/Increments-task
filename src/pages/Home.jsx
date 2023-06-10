import Hero from '../components/Templates/Hero/Hero';
import Layout from '../components/Templates/Layout/Layout';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSection from '../components/Templates/BannerSection/BannerSection';
import { Divider } from '@mui/material';
import ContractSection from '../components/Templates/ContractSection/ContractSection';
import PricingSection from '../components/Templates/PricingSection/PricingSection';
import InfoSection from '../components/Templates/InfoSection/InfoSection';

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
    dotsClass: 'hero_section_slider_dots',
  };
  return (
    <Layout>
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
      <BannerSection />
      <Divider sx={{ mt: 8, mb: 8 }} />
      <ContractSection />
      <Divider sx={{ mt: 20, mb: 8 }} />
      <PricingSection />
      <Divider sx={{ mt: 8, mb: 8 }} />
      <InfoSection />
      <Divider sx={{ mt: 4, mb: 8 }} />
    </Layout>
  );
};

export default Home;
