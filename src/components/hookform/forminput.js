import ClearIcon from '@mui/icons-material/Clear';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material';
import { isNumber, isString } from 'lodash';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import theme from '../../theme';

export const FormInput = (props) => {
  const {
    control,
    sx,
    name,
    label,
    size = 'large',
    disabled = false,
    variant = 'outlined',
    margin = 'dense',
    type = 'text',
    showClearable = false,
    required = false,
    notSpacing = false,
    handleChange,
    InputProps,
    placeholder,
  } = props;

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            fullWidth
            size={size}
            type={isShowPassword ? 'text' : type}
            variant={variant}
            disabled={disabled}
            // label={label}

            placeholder={placeholder}
            error={invalid}
            helperText={error ? error.message : null}
            onChange={(e) => {
              const value = notSpacing
                ? e.target.value.replace(/ /g, '')
                : e.target.value;

              onChange(value);
              if (handleChange) {
                handleChange(name, value);
              }
            }}
            value={
              isString(value) ? value : '' || isNumber(value) ? value : null
            }
            InputProps={
              InputProps
                ? InputProps
                : {
                    endAdornment:
                      type === 'password' ? (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {isShowPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ) : showClearable && Boolean(value) ? (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => {
                              onChange('');
                              if (handleChange) {
                                handleChange(name, '');
                              }
                            }}
                            edge="end"
                          >
                            <ClearIcon />
                          </IconButton>
                        </InputAdornment>
                      ) : null,
                  }
            }
          />
        </FormControl>
      )}
    />
  );
};
