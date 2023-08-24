import React, { useState } from 'react';
import {
  CircularProgress,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import { ClearOutlined } from '@mui/icons-material';

import _ from 'lodash';
import { Controller } from 'react-hook-form';
import theme from '../../theme';

export const FormSelect = (props) => {
  const {
    control,
    name,
    label,
    size = 'small',
    disabled = false,
    variant = 'outlined',
    required = false,
    margin = 'dense',
    options,
    keyOption,
    labelOption,
    optionsDisabled = [],
    loading = false,
    deleteOption,
    handleChange,
    sx,
    placeholder,
  } = props;

  const [deletingId, setDeletingId] = useState(null);

  const renderDeleteIcon = (value, option) => {
    if (
      !deleteOption ||
      option[keyOption] === value ||
      option[keyOption] === 'all'
    )
      return null;
    if (deleteOption.isDeleting && deletingId === option[keyOption])
      return <CircularProgress size={22} />;

    return (
      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          deleteOption.onDelete(option[keyOption]);
          setDeletingId(option[keyOption]);
        }}
      >
        <ClearOutlined fontSize="small" />
      </IconButton>
    );
  };

  const renderOptions = (value) => {
    if (loading) {
      // return <Loading marginTop={1} />;
    }

    if (options.length === 0) {
      return <MenuItem disabled>Không có lựa chọn</MenuItem>;
    }

    return options.map((option, index) => (
      <MenuItem
        key={index}
        disabled={
          optionsDisabled.includes(option[keyOption]) &&
          value !== option[keyOption]
        }
        value={option[keyOption]}
      >
        {deleteOption ? (
          <>
            <ListItemText primary={option[labelOption]} />
            {renderDeleteIcon(value, option)}
          </>
        ) : (
          option[labelOption]
        )}
      </MenuItem>
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: {
          value: required,
          message: 'Vui lòng chọn trường này!',
        },
      }}
      render={({
        field: { value, onChange },
        fieldState: { error, invalid },
      }) => (
        <FormControl
          sx={sx}
          fullWidth
          margin={margin}
          size={size}
          error={invalid}
        >
          {' '}
          <FormLabel
            sx={{
              fontWeight: '600',
              color: theme.palette.common.black,
              pb: label ? 0.5 : 0,
              fontSize: '1.6rem',
            }}
          >
            {label} {required && '*'}
          </FormLabel>
          <Select
            // label={label}
            value={options.length ? value || '' : ''}
            onChange={(e) => {
              if (_.isEqual(value, e.target.value) || loading) return;
              onChange(e);
              if (handleChange) {
                handleChange(name, e.target.value);
              }
            }}
            size={size}
            disabled={disabled}
            // placeholder={placeholder}
            displayEmpty
          >
            {placeholder && (
              <MenuItem value="">
                <em>{placeholder}</em>
              </MenuItem>
            )}
            {renderOptions(value)}
          </Select>
          {invalid && <FormHelperText>{error?.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};
