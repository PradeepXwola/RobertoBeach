import {
  _brands,
  _members,
  _caseStudies,
  _eventCaseStudies,
  _testimonials,
  _marketingPosts,
  _pricingMarketing,
} from 'src/_mock';

import MarketingNewsletter from '../../_marketing/marketing-newsletter';
import PricingMarketing from '../../pricing/marketing/pricing-marketing';
import MarketingLandingServices from '../../_marketing/landing/marketing-landing-services';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
import EventLandingCaseStudies from '../landing/event-landing-case-studies';
import EventTestimonial from '../testtimonial/event-testimonial';
import EventLandingFreeSEO from '../landing/event-landing-free-sec';
import EventLandingProcess from '../landing/event-landing-process';
import EventTeam from '../team/event-team';
import EventLandingAbout from '../landing/event-landing-about';
import EventLandingFaqs from '../landing/event-landing-faqs';
import EventOurClients from '../event-our-clients';

// ----------------------------------------------------------------------

export default function EventLandingView() {

  return (
    <>
      {/* <MarketingLandingHero /> */}

      <EventLandingCaseStudies caseStudies={_eventCaseStudies.slice(-6)} />

      <EventOurClients brands={_brands} />

      <EventLandingAbout />

      {/* <MarketingLandingServices /> */}

      <EventLandingProcess />

      <EventTeam members={_members} />

      {/* <PricingMarketing plans={_pricingMarketing} /> */}

      <EventLandingFaqs />

      <EventTestimonial testimonials={_testimonials} />

      {/* <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} /> */}

      <EventLandingFreeSEO />

      {/* <MarketingNewsletter /> */}
    </>
  );
}
