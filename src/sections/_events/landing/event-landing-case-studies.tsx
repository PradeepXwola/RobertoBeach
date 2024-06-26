import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import TextMaxLine from 'src/components/text-max-line';
import { varHover, varTranHover } from 'src/components/animate';

import { ICaseStudyProps } from 'src/types/case-study';

// ----------------------------------------------------------------------

type Props = {
  caseStudies: ICaseStudyProps[];
};

export default function EventLandingCaseStudies({ caseStudies }: Props) {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: { xs: 2, md: 10 },
        pb: 2,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        {/* <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Our Work
        </Typography> */}

        <Typography variant="h2" style={{fontFamily: "none"}}>Our Events</Typography>
      </Stack>

      <Grid
        spacing={3}
        container
        alignItems="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={6} md={2}>
          <SmallItem caseStudy={caseStudies[0]} />
        </Grid>

        {!mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} />
          </Grid>
        )}

        <Grid container xs={12} sm={12} md={8}>
          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={caseStudies[1]} />
            ) : (
              <SmallItem caseStudy={caseStudies[1]} square />
            )}
          </Grid>

          <Grid xs={6} md={3}>
            <Stack justifyContent={{ md: 'flex-end' }} sx={{ height: { md: 1 } }}>
              <SmallItem caseStudy={caseStudies[2]} square />
            </Stack>
          </Grid>

          <Grid xs={6} md={3}>
            <SmallItem caseStudy={caseStudies[3]} square />
          </Grid>

          <Grid xs={6} md={9}>
            {mdUp ? (
              <LargeItem caseStudy={caseStudies[4]} />
            ) : (
              <SmallItem caseStudy={caseStudies[4]} square />
            )}
          </Grid>
        </Grid>

        {mdUp && (
          <Grid xs={6} md={2}>
            <SmallItem caseStudy={caseStudies[5]} />
          </Grid>
        )}
      </Grid>

      <Stack alignItems={{ xs: 'center', md: 'flex-end' }}>
        <Button
          component={RouterLink}
          href={paths.event.caseStudies}
          size="large"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          View all
        </Button>
      </Stack>
    </Container>
  );
}

// ----------------------------------------------------------------------

type LargeItemProps = {
  caseStudy: ICaseStudyProps;
};

function LargeItem({ caseStudy }: LargeItemProps) {
  return (
    <Paper
      sx={{
        display: 'grid',
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.z24,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        },
      }}
    >
      <Box sx={{ p: 0.75 }}>
        <Image alt="cover" src={caseStudy.coverUrl} ratio="3/4" sx={{ borderRadius: 2 }} />
      </Box>

      <Stack alignItems="flex-end" justifyContent="space-between" sx={{ p: 3, pt: 5, height: 1 }}>
        <div>
          {/* <Typography variant="overline" sx={{ color: 'primary.main' }}>
            {caseStudy.category}
          </Typography> */}

          <Typography variant="h4" sx={{ mt: 1, mb: 2 }}>
            {caseStudy.title}
          </Typography>

          <TextMaxLine variant="body2" line={5} sx={{ color: 'text.secondary' }}>
          The planned summer party should be a special highlight that will stay in the guests' minds for a long time? Then plan a trip to the Munich Caribbean with us.
          </TextMaxLine>
        </div>

        <Button
          component={RouterLink}
          href={paths.event.caseStudy}
          size="small"
          color="inherit"
          endIcon={<Iconify icon="carbon:chevron-right" />}
        >
          Explore
        </Button>
      </Stack>
    </Paper>
  );
}

// ----------------------------------------------------------------------

type SmallItemProps = {
  caseStudy: ICaseStudyProps;
  square?: boolean;
};

function SmallItem({ caseStudy, square }: SmallItemProps) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Link component={RouterLink} href={paths.event.caseStudy}>
      <Paper
        component={m.div}
        whileHover="hover"
        sx={{
          position: 'relative',
          cursor: 'pointer',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Stack
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{
            width: 1,
            height: 1,
            zIndex: 9,
            position: 'absolute',
            color: 'common.white',
            textAlign: 'center',
          }}
        >
          {/* <Typography variant="overline" sx={{ opacity: 0.48 }}>
            {caseStudy.category}
          </Typography> */}
          <Typography variant="h6">{caseStudy.title}</Typography>
        </Stack>

        <m.div variants={varHover(1.25)} transition={varTranHover()}>
          <Image
            alt="cover"
            src={caseStudy.coverUrl}
            ratio={(square && '1/1') || (mdUp && '3/4') || '1/1'}
            overlay={alpha(theme.palette.grey[900], 0.48)}
          />
        </m.div>
      </Paper>
    </Link>
  );
}
