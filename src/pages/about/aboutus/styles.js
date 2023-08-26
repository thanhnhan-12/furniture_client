import { makeStyles } from '@mui/styles';
import AboutBanner from '../../../assets/images/aboutBanner.jpg';

export default makeStyles(() => ({
  aboutHeading: {
    fontSize: '3.6rem !important',
  },

  aboutHeadingContent: {
    marginTop: '2rem !important',
    fontSize: '1.6rem !important',
    color: '#000',
  },

  aboutBanner: {
    backgroundImage: `url(${AboutBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '46.8rem',
    margin: '3.6rem 0',
  },

  aboutTitle: {
    fontSize: '1.6rem !important'
  },
}));
