import { Helmet } from 'react-helmet-async';

import EventsLandingView from 'src/sections/_events/view/event-landing-view'


// ----------------------------------------------------------------------

export default function EventsLandingPage() {
  return (
    <>
      <Helmet>
        <title> Event: Home</title>
      </Helmet>

      <EventsLandingView />
    </>
  );
}
