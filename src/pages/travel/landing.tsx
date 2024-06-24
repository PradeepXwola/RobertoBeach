import { Helmet } from 'react-helmet-async';

import TravelLandingView from 'src/sections/_travel/view/travel-landing-view';
import { localStorageGetItem } from 'src/utils/storage-available';

// ----------------------------------------------------------------------

export default function TravelLandingPage() {
  const settings = localStorageGetItem('settings') || '{}';

  const settingsJson = JSON.parse(settings)

  const darkModeOn = settingsJson?.themeMode == 'dark' ? true : false

  console.log("darkModeOn in travel  =>", darkModeOn)
  return (
    <>
      <Helmet>
        <title> Travel: Home</title>
      </Helmet>

      <TravelLandingView />
    </>
  );
}
