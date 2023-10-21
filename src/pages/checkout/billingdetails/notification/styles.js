import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  collapseAlert: {},

  alert: {
    padding: '2rem !important',
    background:
      'var(--solid-sucess-background, linear-gradient(95deg, #32BB71 15.3%, #2A9D8F 113.45%)) !important',
    border: '1px solid var(--solid-sucess-border, #43D590) !important',
  },

  alertTitle: {
    color: '#fff',
  },

  titleNotify: {
    fontSize: '1.4rem !important',
    fontWeight: '600 !important',
  },

  titleOrder: {
    fontSize: '1.2rem !important',
    fontWeight: '400 !important',
  },
}));
