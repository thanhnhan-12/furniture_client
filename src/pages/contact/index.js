import { Box, Typography } from '@mui/material';
import React from 'react';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import BackgroundBanner from '../../components/backgroundbanner';
import FormContact from './formcontact';
import ContactInfor from './contactinfor';
import Services from '../../components/services';

const Contact = () => {
  return (
    <Box>
      <BackgroundBanner heading="Contact" title="Contact" />
      <Box mb="6.3rem">
        <LayoutContainer>
          <Box textAlign="center" margin="9.8rem 31rem 8.2rem">
            <Typography
              component="h2"
              sx={{ fontSize: '3.6rem', fontWeight: '600' }}
            >
              Get In Touch With Us
            </Typography>
            <Typography
              component="p"
              sx={{ color: '#9F9F9F', fontSize: '1.6rem' }}
            >
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center" gap="15.9rem">
            <ContactInfor />
            <FormContact />
          </Box>
        </LayoutContainer>
      </Box>

      <Services />
    </Box>
  );
};

export default Contact;
