import { Helmet } from 'react-helmet-async';

import ContactUsView from 'src/sections/contact-us/view/contact-us-view';

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title> Contact US</title>
      </Helmet>

      <ContactUsView />
    </>
  );
}
