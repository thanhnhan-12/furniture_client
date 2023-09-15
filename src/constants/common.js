import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const formatPrice = (price) =>
  price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

export const notifyAddCart = () => {
  toast('Product has been added in cart', {
    className: 'custom-toast',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
};

export const nofifyLoginSuccessfully = () => {
  toast('Login Successfully!', {
    className: 'custom-toast',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
}

export const nofifyRegisterSuccessfully = () => {
  toast('Register Successfully!', {
    className: 'custom-toast',
    draggable: true,
    position: toast.POSITION.TOP_CENTER,
  });
}