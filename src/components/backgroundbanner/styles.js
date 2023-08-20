import { makeStyles } from '@mui/styles';
import BgBanner from '../../assets/images/backgroundBanner.jpg';

export default makeStyles(() => ({
  bgBanner: {
    backgroundImage: `url(${BgBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '33.6rem',
    position: 'relative',
  },

  boxHeadTitle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  boxHeading: {
    fontSize: '4.8rem',
    fontWeight: '500',
  },

  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2rem',
  },

  home: {
    fontSize: '1.6rem',
    fontWeight: '500',
  },

  title: {
    fontSize: '1.6rem',
    fontWeight: '300',
    color: '#000',
  },
}));
