import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'Events',
    total: 1000,
    content: 'We are very much excited to say that we have succesfully organized 1000+ events in Roberto beach.',
  },
  {
    label: 'Happy customers',
    total: 3200,
    content: 'We are happy to say that we have 3.2k+ Happy customers who have celebrated their special days with our Roberto Beach.',
  },
  {
    label: 'years of experience',
    total: 20,
    content: 'Roberto Beach have 20+ years of experiance in organizing events. ',
  },
];

// ----------------------------------------------------------------------

export default function EventLandingAbout() {
  
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Image
        alt="landing about"
        src="/assets/images/events/event_post_hero.jpeg"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      />

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            About us
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}  style={{fontFamily: "none"}}>
            Who We Are
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nestled in the vibrant heart of Munich, robertobeach is a premier destination for the 
            sophistication of private and business events, Our state-of-the-art facility redefines leisure 
            and event hosting, providing a versatile backdrop for every occasion—from high-powered business 
            conferences and enriching workshops to intimate birthdays and lavish weddings.
          </Typography>

          <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Explore
          </Button>
        </Grid>

        <Grid xs={12} md={6}>
          <Stack spacing={5}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
