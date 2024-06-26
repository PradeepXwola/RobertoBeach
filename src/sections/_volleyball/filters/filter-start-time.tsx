import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { filledInputClasses } from '@mui/material/FilledInput';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function StartTime() {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (newTime) => {
    setSelectedTime(newTime);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Start time"
        value={selectedTime}
        onChange={handleTimeChange}
        renderInput={(params) => (
          <TextField
            {...params}
            hiddenLabel
            variant="filled"
            sx={{
            // Set the desired width here
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
    </LocalizationProvider>
  );
}
