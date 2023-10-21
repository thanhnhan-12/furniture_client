import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formatPrice = (price) =>
  price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

export const notifyAddCart = () => {
  toast('Product has been added in cart', {
    className: 'notifyAdd',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

export const notifyAddAddress = () => {
  toast('Address has been added in address ', {
    className: 'notifyAdd',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

export const notifyRemoveCart = () => {
  toast('Product has been remove in cart', {
    className: 'notifyRemove',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

export const notifyRemoveAddress = () => {
  toast('Address has been remove in cart', {
    className: 'notifyRemove',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

export const nofifyLoginSuccessfully = () => {
  toast('Login Successfully!', {
    className: 'notifyLogin',
    draggable: true,
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export const nofifyRegisterSuccessfully = () => {
  toast('Register Successfully!', {
    className: 'notifyRegister',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

export const nofifyOrderSuccessfully = () => {
  toast('Order Success. Please wait while the order is approved', {
    className: 'notifyOrderSuccessful',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};
