import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heading: {
    fontSize: '2.8rem !important',
  },

  button: {
    backgroundColor: '#000 !important',
    color: '#fff !important',
    width: '100% ',
    padding: '1.2rem 0 !important',
    fontSize: '1.6rem !important',
    borderRadius: '2.4rem !important',
    marginTop: '2.5rem !important',
    '&:hover': {
      backgroundColor: '#fff !important',
      color: '#000 !important',
      border: '1px solid #000 !important',
    },
  },

  account: {
    fontSize: '1.4rem !important',
    color: '#000 !important',
  },

  link: {
    color: '#DB772C !important',
    textDecoration: 'none',
  },
}));
