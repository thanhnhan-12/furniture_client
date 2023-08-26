import { Box } from '@mui/material';
import React from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import AboutUs from './aboutus';
import Services from '../../components/services';

const About = () => {
  return (
    <Box>
      <BackgroundBanner heading="About Us" title="About Us" />

      <Box mb="6.3rem">
        <LayoutContainer>
          <AboutUs />
        </LayoutContainer>
      </Box>

      <Services />
    </Box>
  );
};

export default About;
