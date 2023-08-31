import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  loginContainer: {
    background: 'linear-gradient(90deg, #EDE0D4 0%, #F6F3EF 100%)',
    position: 'relative',
    height: '100vh',
  },

  login: {
    display: 'flex',
    // justifyContent: 'center',
    gap: '10rem',
    alignItems: 'center',
    // margin: '0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    boxShadow:
      '0px 8px 16px 0px rgba(50, 50, 71, 0.06), 0px 8px 8px 0px rgba(50, 50, 71, 0.08)',
    borderRadius: '2.4rem',
    padding: '2.1rem 9.8rem 2.1rem 2.5rem',
    width: '95rem',
  },

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
