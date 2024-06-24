import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { _eventCaseStudies, _testimonials } from 'src/_mock';

import Image from 'src/components/image';
import Markdown from 'src/components/markdown';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import EventTestimonial from '../testtimonial/event-testimonial';
import EventLandingFreeSEO from '../landing/event-landing-free-sec';
import EventCaseStudyListSimilar from '../list/event-case-study-list-similar';
import EventCaseStudyDetailsGallery from '../details/event-case-study-details-gallery';
import EventCaseStudyDetailsSummary from '../details/event-case-study-details-summary';

// ----------------------------------------------------------------------

const _mockCaseStudy = _eventCaseStudies[0];

export default function EventCaseStudyView() {
  return (
    <>
      <Container
        sx={{
          overflow: 'hidden',
          pt: 5,
          pb: { xs: 10, md: 15 },
        }}
      >
        <Image alt="hero" src={_mockCaseStudy.heroUrl} ratio="16/9" sx={{ borderRadius: 2 }} />

        <CustomBreadcrumbs
          sx={{ my: 5 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Events', href: paths.event.caseStudies },
            { name: _mockCaseStudy.title },
          ]}
        />

        <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: 'row-reverse' }}>
          <Grid xs={12} md={4}>
            <EventCaseStudyDetailsSummary caseStudy={_eventCaseStudies[0]} />
          </Grid>

          <Grid xs={12} md={8}>
            <Markdown content={_mockCaseStudy.content} />
            <EventCaseStudyDetailsGallery images={_mockCaseStudy.galleryImgs} />
          </Grid>
        </Grid>
      </Container>

      <EventTestimonial testimonials={_testimonials} />

      <EventCaseStudyListSimilar caseStudies={_eventCaseStudies.slice(0, 3)} />

      <EventLandingFreeSEO />

    </>
  );
}
