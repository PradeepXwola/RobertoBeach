import React from 'react'
import { _testimonials, _tours,_volleyball } from 'src/_mock'
import { alpha } from '@mui/material/styles';
import VolleyBallLandingHero from '../landing/volleyball-landing-hero'

import VolleyBallTestimonial from '../testimonial/volleyball-testimonial'

import VolleyBallLandingSummary from '../landing/volleyball-landing-summary'
import VolleyBallLandingProductDetails from '../landing/volleyball-landing-productdetails'
import VolleyBallFilters from '../filters/volleyball-filters'
import { Box, Container } from '@mui/system'
  export default function VolleyBallLandingView()
  {
  return (
    // <div>volleyBall-landing-view</div>
<>
    <Box sx={{ position: 'relative' }}>
    <VolleyBallLandingHero volleyballs={_volleyball.slice(0, 4)} />

    <Container
      sx={{
        mb: { md: 10 },
        left: { md: 0 },
        right: { md: 0 },
        bottom: { md: 0 },
        mx: { md: 'auto' },
        pt: { xs: 3, md: 0 },
        position: { md: 'absolute' },
      }}
    >
      <VolleyBallFilters
        sx={{
          color: { md: 'common.white' },
          bgcolor: (theme) => ({
            xs: 'background.neutral',
            md: alpha(theme.palette.common.white, 0.08),
          }),
        }}
      />
    </Container>
  </Box>

    <VolleyBallLandingSummary/>
    <VolleyBallLandingProductDetails tours={_tours.slice(0, 4)}/>
    <VolleyBallTestimonial testimonials={_testimonials}/>

</>
    


  )
}
