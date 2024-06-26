import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { filledInputClasses } from '@mui/material/FilledInput';

// Generate an array of numbers (1, 2, 3, 4, ...)
const generateNumbers = (count) => Array.from({ length: count }, (_, i) => ({
  value: (i + 1).toString(),
  label: `${i + 1} hour`,
}));

export default function Duration() {
  const numberOptions = generateNumbers(10); // Change the number 10 to the desired count

  return (
    <Autocomplete
      fullWidth
      options={numberOptions}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Duration?"
          hiddenLabel
          variant="filled"
          sx={{
            [`& .${filledInputClasses.root}`]: {
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${filledInputClasses.focused}`]: {
                bgcolor: 'transparent',
              },
            },
            [`& .${filledInputClasses.input}`]: {
              typography: 'subtitle1',
            },
          }}
        />
      )}
    />
  );
}
