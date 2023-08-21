import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  allServices: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  services: {
    display: 'flex',
    alignItems: 'center',
  },

  common: {
    marginLeft: '1rem',
  },

  serviceName: {
    color: '#242424',
    fontSize: '2.5rem',
    fontWeight: '600',
    lineHeight: '3.75rem',
  },

  quality: {
    color: '#898989',
    fontSize: '2rem',
    fontWeight: '500',
    lineHeight: '3rem',
  },
}));
