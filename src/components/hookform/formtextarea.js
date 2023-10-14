import React from 'react';
import { FormControl, FormLabel, SxProps, TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import theme from '../../theme';

export const FormTextarea = (props) => {
  const {
    control,
    sx,
    name,
    label,
    minRows,
    size = 'large',
    disabled = false,
    variant = 'outlined',
    margin = 'dense',
    required = false,
    handleChange,
    placeholder,
  } = props;

  return (
    <Controller
      name={name}
      rules={{
        required: {
          value: required,
          message: 'Please enter this field!',
        },
      }}
      control={control}
      render={({
        field: { value, onChange },
        fieldState: { error, invalid },
      }) => (
        <FormControl
          required={required}
          fullWidth
          size={size}
          margin={margin}
          sx={sx}
        >
          <FormLabel
            sx={{
              fontWeight: '600',
              color: error
                ? theme.palette.error.main
                : theme.palette.common.black,
              pb: label ? 0.5 : 0,
              fontSize: '1.6rem',
            }}
          >
            {label}
          </FormLabel>
          <TextField
            multiline
            variant={variant}
            disabled={disabled}
            error={invalid}
            helperText={error ? error.message : null}
            minRows={minRows}
            placeholder={placeholder}
            maxRows={minRows}
            onChange={(e) => {
              const value = e.target.value;

              onChange(value);
              if (handleChange) {
                handleChange(name, value);
              }
            }}
            value={value ? value : ''}
          />
        </FormControl>
      )}
    />
  );
};
