import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  filterSort: {
    backgroundColor: '#F9F1E7',
    padding: '3rem 10rem 3rem 9.8rem',
    justifyContent: 'space-between',
    marginBottom: '6.3rem',
  },

  filterLeft: {},

  filter: {
    display: 'flex',
    alignItems: 'center',
  },

  view: {
    margin: '0 3rem 0 2.3rem',
  },

  border: {
    border: '2px solid #9F9F9F',
    height: '3.7rem',
    marginRight: '3.4rem',
  },

  showing: {
    fontSize: '1.6rem',
    fontWeight: '400',
    color: '#000',
  },

  filterRight: {},

  sort: {
    fontSize: '2rem',
    color: '#000',
  },

  inputCommon: {
    textAlign: 'center',
    border: 'none',
    borderRadius: '0.3rem',
  },

  inputShow: {
    width: '3rem',
    height: '3rem',
    margin: '0 2.9rem 0 1.7rem',
  },

  inputSort: {
    width: '15rem',
    height: '3rem',
    marginLeft: '1.7rem',
  },
}));
