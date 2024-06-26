import { useState, useCallback } from 'react';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack, { StackProps } from '@mui/material/Stack';

import Iconify from 'src/components/iconify';

import FilterTime from './filter-time';
import StartTime from './filter-start-time';
import Duration from './filter-duration';

// ----------------------------------------------------------------------

export default function VolleyBallFilters({ sx, ...other }: StackProps) {
  const [departureDay, setDepartureDay] = useState<Date | null>(null);



  const handleChangeDepartureDay = useCallback((newValue: Date | null) => {
    setDepartureDay(newValue);
  }, []);




  return (
    <Stack
      spacing={2.5}
      alignItems={{ md: 'center' }}
      direction={{ xs: 'column', md: 'row' }}
      sx={{ p: 4, borderRadius: 2, bgcolor: 'background.neutral', ...sx }}
      {...other}
    >

      <FilterTime departureDay={departureDay} onChangeDepartureDay={handleChangeDepartureDay} />
      <Divider flexItem orientation="vertical" />
      <StartTime
      />

  
      <Divider flexItem orientation="vertical" />
      <Duration />
     
      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{
          px: 0,
          flexShrink: 0,
          minWidth: { xs: 1, md: 48 },
        }}
      >
        <Iconify icon="carbon:search" />
      </Button>
    </Stack>
  );
}
