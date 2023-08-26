import { Box, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import useStyles from './styles';
import AboutCard from '../../../assets/images/aboutCard.jpg';

const AboutUs = () => {
  const cx = classNames.bind(useStyles());

  return (
    <Box>
      <Box mt="3.6rem" textAlign="center">
        <Typography component="h2" className={cx('aboutHeading')}>
          About Us
        </Typography>
        <Typography component="h2" className={cx('aboutHeading')}>
          Nature inspired designs, Hand-crafted with love.
        </Typography>
        <Typography component="p" className={cx('aboutHeadingContent')}>
          At Furniro, we take great pride in the exquisite designs and
          hand-craftsmanship of our products. Embodying a slow way of life that
          is rooted in taking inspiration from the outdoors, our nature inspired
          products stand at an intersection between local and global. Our
          designs blend contemporary sensibilities with age-old tradition of
          “karigari” that promotes excellence in craftsmanship and quality at
          every turn.
        </Typography>
      </Box>

      <Box
        mt="3.6rem"
        display="flex"
        gap="10rem"
        borderBottom="1px solid #c0c0c0"
        p="0 1.1rem 5rem"
      >
        <Box
          component="img"
          src={AboutCard}
          alt=""
          sx={{ width: '46.2rem' }}
        ></Box>

        <Box>
          <Typography
            component="h2"
            className={cx('aboutHeading')}
            textAlign="center"
          >
            About the Founders
          </Typography>

          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            Furniro is co-founded by Saurabh Ailawadi and Shweta Mewara,
            who bring varied experience in the fields of design, interiors,
            retail and brand management. We at Furniro believe that your
            home should be your own haven; where you dine, work, sleep, dream
            and live amidst surroundings that inspire you and reflect your
            unique personality and aesthetics. Your home should be the most
            comfortable place, for it is rightly said that the things we love
            tell an intricate tale of who we truly are.
          </Typography>

          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            Our passion for crafting furniture that soothingly blends with
            strong aesthetics, stems from the gap we saw in the Indian market,
            motivating us to offer options that breathe easy and elevate your
            space. Branching out from the fast paced, mass produced and machine
            made industry, we are grounded by our respect for slow living and
            sustainability. Being aware of the impact that our choices have on
            the environment, and the value of age-old knowledge passed down
            through generations, we hope to create products that find harmony in
            strong aesthetics, nature inspired designs and quality
            craftsmanship. Intertwining the stories of our master artisans, each
            of our creations reflects authenticity and adds character to your
            home.
          </Typography>

          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            Our designs aim to echo the beauty of nature while enriching your
            space with authenticity. Whereas, our commitment lies in crafting
            pieces that not only grace your living spaces but also tell a story
            of tradition and innovation. Intertwining the stories of our master
            artisans, each of our creations bears the mark of their dedication
            and artistry. So, as we continue our journey, we are driven by the
            desire to create furniture that marries style and substance by
            blending timeless traditions with the modern sensibilities that make
            up our lives now.
          </Typography>
        </Box>
      </Box>

      <Typography
        component="h2"
        className={cx('aboutHeading')}
        textAlign="center"
        mt="1.6rem"
      >
        Our Brand Philosophy
      </Typography>

      <Box className={cx('aboutBanner')}></Box>

      <Box>
        <Box mb="2.8rem" >
          <Typography component="h3" className={cx('aboutTitle')}>
            CUSTOMER EXPERIENCE
          </Typography>
          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            Everything we create is meticulously designed, keeping our customers
            in mind. Our commitment to providing an incredible service
            experience ensures that every interaction, be it online or with one
            of our cheerful customer service associates, leaves our customers
            smiling and satisfied.
          </Typography>
        </Box>

        <Box mb="2.8rem">
          <Typography component="h3" className={cx('aboutTitle')}>
            QUALITY
          </Typography>
          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            We believe in combining outstanding quality with astonishing value,
            offering a carefully curated assortment of home products that
            reflect both our history and maintain a global appeal. We design our
            furniture such that it is not driven by transient trends, and is
            made to last a lifetime. Pairing timeless elements with a fresh
            twist, each item is also designed to enhance a room, or inspire a
            memorable experience.
          </Typography>
        </Box>

        <Box mb="2.8rem">
          <Typography component="h3" className={cx('aboutTitle')}>
            NATURAL
          </Typography>
          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            At Furniro, we view a blank canvas as a world of endless
            possibilities and unlimited potential. Our philosophy revolves
            around celebrating the inherent beauty of natural materials,
            skillfully crafted into simple yet one-of-a-kind shapes and
            silhouettes. From upholstery made of natural yarns like Linen and
            Cotton to furniture pieces showcasing materials such as wood and
            rattan that are timeless in their design and useful in their
            purpose; Anything natural excites us!
          </Typography>
        </Box>

        <Box mb="2.8rem">
          <Typography component="h3" className={cx('aboutTitle')}>
            SUSTAINABILITY
          </Typography>
          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            We strive to use materials that are sustainably sourced, and
            strongly believe in supporting artisans and their crafts. As a brand
            we aim to preserve and revive the dying traditions and techniques of
            hand crafted furniture making and are associated with NGOs
            supporting this goal. One of which is ‘The Vishwakarma Swayam
            Sahayata Samuh’ that is engaged in helping and providing education &
            training to the local artisans.
          </Typography>
        </Box>

        <Box mb="2.8rem">
          <Typography component="h3" className={cx('aboutTitle')}>
            COMFORT
          </Typography>
          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            Whether it is the ease and comfort of shopping with us or the
            unparalleled comfort provided by our products, we have meticulously
            attended to all your comfort needs. Our commitment to delivering
            utmost comfort begins with the selection of our high-quality
            materials. Every aspect of our design process revolves around
            creating pieces that cocoon you in a world of relaxation and ensure
            a truly enjoyable and fulfilling experience.
          </Typography>
        </Box>

        <Box mb="2.8rem">
          <Typography component="h3" className={cx('aboutTitle')}>
            STRONG AESTHETICS
          </Typography>
          <Typography
            component="p"
            className={cx('aboutHeadingContent')}
            sx={{ textAlign: 'justify', lineHeight: '1.6' }}
          >
            Furniro believes in creating beautiful aesthetics that will
            live with you forever. Our design philosophy is very clear, to
            create and sell products which are honest, breathe easy and exude
            strong aesthetics.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
