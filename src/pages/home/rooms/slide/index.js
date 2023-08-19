import React from 'react';
import Slider from 'react-slick';
import SlideItemImg1 from '../../../../assets/images/SlideItemImg1.jpg';
import SlideItemImg2 from '../../../../assets/images/SlideItemImg2.jpg';
import { Box } from '@mui/material';
import theme from '../../../../theme';

const Slide = () => {
  const settings = {
    dots: true,
    //  autoplay: true,
    className: 'center',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '80px',
    centerMode: true,
    infinite: true,
    speed: 500,
  };
  return (
    <Box
      sx={{
        mt: 1,
      }}
    >
      <Slider {...settings}>
        <div>
          <Box
            sx={{
              borderRadius: '10px',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              position: 'relative',

              height: '50rem',
              backgroundImage: `url(${SlideItemImg1})`,
              [theme.breakpoints.down('sm')]: {
                backgroundSize: 'cover',
              },
              [theme.breakpoints.up('sm')]: {
                backgroundSize: 'contain',
              },
            }}
          ></Box>
        </div>

        <div>
          <Box
            sx={{
              borderRadius: '10px',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              position: 'relative',

              height: '50rem',
              backgroundImage: `url(${SlideItemImg1})`,
              [theme.breakpoints.down('sm')]: {
                backgroundSize: 'cover',
              },
              [theme.breakpoints.up('sm')]: {
                backgroundSize: 'contain',
              },
            }}
          ></Box>
        </div>
        
        <div>
          <Box
            sx={{
              borderRadius: '10px',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              position: 'relative',

              height: '50rem',
              backgroundImage: `url(${SlideItemImg2})`,
              [theme.breakpoints.down('sm')]: {
                backgroundSize: 'cover',
              },
              [theme.breakpoints.up('sm')]: {
                backgroundSize: 'contain',
              },
            }}
          ></Box>
        </div>
      </Slider>
    </Box>
  );
};

export default Slide;
