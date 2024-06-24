import { Helmet } from 'react-helmet-async';

import EventCaseStudyView from 'src/sections/_events/view/event-case-study-view';

// ----------------------------------------------------------------------

export default function MarketingCaseStudyPage() {
  return (
    <>
      <Helmet>
        <title> Event: Case Study</title>
      </Helmet>

      <EventCaseStudyView />
    </>
  );
}
