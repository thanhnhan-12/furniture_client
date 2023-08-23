import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  allImg: {
    display: 'flex',
    alignItems: 'start',
  },

  img: {
    borderRadius: '1rem',
    backgroundColor: '#F9F1E7',
    marginBottom: '3.2rem',
    padding: '1.8rem 0.8rem',
    cursor: 'pointer',
  },

  imgItem: {
    '&:hover': {
      opacity: '0.5',
    },
  },

  active: {
    border: '2px solid #000',
  },
}));
