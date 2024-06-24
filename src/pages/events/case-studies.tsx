import { Helmet } from 'react-helmet-async';

import EventCaseStudiesView from 'src/sections/_events/view/event-case-studies-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudiesPage() {
  return (
    <>
      <Helmet>
        <title> Event: Case Studies</title>
      </Helmet>

      <EventCaseStudiesView />
    </>
  );
}
