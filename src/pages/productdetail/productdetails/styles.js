import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  common: {
    fontWeight: '400',
  },

  productName: {
    fontSize: '4.2rem',
  },

  evalute: {
    display: 'flex',
    alignItems: 'center',
  },

  price: {
    color: '#9F9F9F',
    fontSize: '2.4rem',
    fontWeight: '500',
    margin: '1.5rem 0',
  },

  border: {
    border: '1px solid #9F9F9F',
    height: '3rem',
    margin: '0 1.8rem 0 2.2rem',
  },

  review: {
    fontSize: '1.3rem',
  },

  description: {
    fontSize: '1.3rem',
    margin: '1.3rem 0 2.2rem',
    color: '#000',
  },

  size: {
    fontSize: '1.4rem',
    margin: '2.2rem 0 1.2rem',
  },

  productSize: {
    gap: '1.6rem',
  },

  sizeCommon: {
    borderRadius: '0.5rem',
    padding: '0.5rem 1.2rem',
    fontSize: '1.3rem',
    backgroundColor: '#F9F1E7',
    cursor: 'pointer',
  },

  selected: {
    backgroundColor: '#B88E2F',
    color: '#fff',
  },

  btnCart: {
    display: 'flex',
    margin: '3.2rem 0 6rem',
  },

  btnAmount: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #9F9F9F',
    borderRadius: '1rem',
    padding: '2rem 1.5rem',
    marginRight: '1.8rem',
  },

  amount: {
    fontSize: '1.6rem',
    fontWeight: '500',
    margin: '0 3.5rem',
  },

  infor: {
    borderTop: '1px solid #D9D9D9',
    padding: '4.1rem 0 6.7rem',
  },

  inforDetail: {
    display: 'flex',
    alignItems: 'baseline',
  },

  text: {
    fontSize: '1.6rem',
    fontWeight: '400',
    color: '#9F9F9F',
  },

  txtName: {
    width: '8rem',
  },
}));
