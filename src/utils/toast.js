import { isEmpty } from 'lodash';
import toast from 'react-hot-toast';

export const toastMessage = {
  success: (message) => toast.success(message),
  error: (message) => toast.error(message || 'Error System'),
  custom: (content) => toast.custom(content),
  setErrors: (error, setError) => {
    if (!error || isEmpty(error.errors)) {
      return toast.error(error.message || 'Error System');
    }

    for (const key in error.errors) {
      for (const err of error.errors[key]) {
        if (!setError) {
          return;
        }
        setError(key, { message: err.message });
      }
    }
  },
};
