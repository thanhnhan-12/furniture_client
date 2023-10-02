import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  formWrapper: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '2',
  },

  modalForm: {
    width: '40rem',
    padding: '1.6rem',
    borderRadius: '1.5rem ',
    border: '1px solid #000 ',
    backgroundColor: '#fff',
  },

  btnAddAddress: {
    borderRadius: '1.5rem !important',
    padding: '1.2rem 3.2rem !important',
    fontSize: '1.6rem !important',
    color: '#fff !important',
    backgroundColor: '#B88E2F !important',

    '&:hover': {
      border: '1px solid #000 !important',
      backgroundColor: '#fff !important',
      color: '#000 !important',
    },
  },
}));
