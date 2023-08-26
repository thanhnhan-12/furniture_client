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
}));
