import { Helmet } from 'react-helmet-async';

import RestaurantsLandingView from 'src/sections/_restaurants/view/restaurant-landing-view';

// ----------------------------------------------------------------------

export default function RestaurantsLandingPage() {
  return (
    <>
      <Helmet>
        <title> Restaurent: Home</title>
      </Helmet>

      <RestaurantsLandingView />
    </>
  );
}
