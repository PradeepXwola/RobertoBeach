import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { _eventCaseStudies, _testimonials, _marketingPosts } from 'src/_mock';

import MarketingCaseStudyList from '../../_marketing/list/marketing-case-study-list';
import EventTestimonial from '../testtimonial/event-testimonial';
import MarketingLandingFreeSEO from '../../_marketing/landing/marketing-landing-free-seo';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import EventLandingFreeSEO from '../landing/event-landing-free-sec';

// ----------------------------------------------------------------------

export default function EventCaseStudiesView() {
  return (
    <>
      <Container>
        <Stack
          spacing={3}
          sx={{
            py: 5,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Our Case Studies pradeep</Typography>

          <Typography sx={{ color: 'text.secondary' }}>
            Nullam tincidunt adipiscing enim.
            <br /> Mauris sollicitudin fermentum libero.
          </Typography>
        </Stack>

        <MarketingCaseStudyList caseStudies={_eventCaseStudies} />
      </Container>

      <EventTestimonial testimonials={_testimonials} />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      <EventLandingFreeSEO />

    </>
  );
}
