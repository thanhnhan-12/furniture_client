import * as yup from 'yup';
import { messageRequired } from '../utils/common';
import { phoneRegExp } from './common';

export const schemaLogin = yup.object().shape({
  email: yup
    .string()
    .email('Incorrect Email')
    .required(messageRequired('Email')),

  password: yup.string().required('Please enter your password.').min(6),
});

export const schemaRegister = yup.object().shape({
  firstName: yup.string().required(messageRequired('First Name')),

  lastName: yup.string().required(messageRequired('Last Name')),

  email: yup
    .string()
    .email('Incorrect Email')
    .required(messageRequired('Email')),

  phoneNumber: yup
    .string()
    .required(messageRequired('Phone Number'))
    .matches(phoneRegExp, 'Incorrect phone number format')
    .min(9, 'Incorrect phone number format')
    .max(10, 'Incorrect phone number format'),

  password: yup.string().required('Please enter your password.').min(6),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const schemaCheckout = yup.object().shape({
  firstName: yup.string().required(messageRequired('First Name')),

  lastName: yup.string().required(messageRequired('Last Name')),

  province: yup.string().required(messageRequired('Province')),

  district: yup.string().required(messageRequired('District')),

  ward: yup.string().required(messageRequired('Ward')),

  phone: yup
    .string()
    .required(messageRequired('Phone Number'))
    .matches(phoneRegExp, 'Incorrect phone number format')
    .min(9, 'Incorrect phone number format')
    .max(10, 'Incorrect phone number format'),

  email: yup
    .string()
    .email('Incorrect Email')
    .required(messageRequired('Email')),

  address: yup.string().required(messageRequired('Address')),
});

export const schemaAddress = yup.object().shape({
  province: yup.string().required(messageRequired('Province')),

  district: yup.string().required(messageRequired('District')),

  ward: yup.string().required(messageRequired('Ward')),

  address: yup.string().required(messageRequired('Address')),
});

export const schemaContact = yup.object().shape({
  yourname: yup.string().required(messageRequired('Your Name')),

  email: yup
    .string()
    .email('Incorrect Email')
    .required(messageRequired('Email')),

  subject: yup.string().required(messageRequired('Subject')),

  message: yup.string().required(messageRequired('Message')),
});

export const schemaSearchProduct = yup.object().shape({
  searchProduct: yup.string().required(messageRequired('Search Product')),
});

export const schemaNewProduct = yup.object().shape({
  productName: yup.string().required(messageRequired('Product Name')),

  description: yup.string().required(messageRequired('Description')),

  price: yup
    .number()
    .typeError('Price must be a number')
    .positive('Price must be a positive number')
    .required(messageRequired('Price is required')),

  quantity: yup
    .number()
    .typeError('Quantity must be a number')
    .positive('Quantity must be a positive number')
    .required(messageRequired('Quantity is required')),

  category: yup.string().required(messageRequired('Category')),
});
