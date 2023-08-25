import { Box, Button } from '@mui/material';
import React from 'react';
import { FormInput } from '../../../components/hookform';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaContact } from '../../../constants/schema';
import classNames from 'classnames/bind';
import useStyles from './styles';

const FormContact = () => {
  const cx = classNames.bind(useStyles());

  const { control, handleSubmit } = useForm({
    defaultValues: {},
    resolver: yupResolver(schemaContact),
  });

  return (
    <Box width="39%" >
      <Box>
        <FormInput
          control={control}
          type="text"
          name="yourname"
          label="Your Name"
          placeholder="Your Name"
          sx={{ marginBottom: '3.6rem' }}
        />

        <FormInput
          control={control}
          type="email"
          name="email"
          label="Email"
          placeholder="Email Address"
          sx={{ marginBottom: '3.6rem' }}
        />

        <FormInput
          control={control}
          type="text"
          name="subject"
          label="Subject"
          placeholder="Subject"
          sx={{ marginBottom: '3.6rem' }}
        />

        <FormInput
          control={control}
          type="text"
          name="message"
          label="Message"
          placeholder="Message"
        />

        <Button className={cx('btnSubmit')} type="submit">Submit</Button>
      </Box>
    </Box>
  );
};

export default FormContact;
