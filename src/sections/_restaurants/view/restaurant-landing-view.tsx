import {
  _courses,
  _members,
  _coursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from 'src/_mock';

import RestaurantLandingHero from '../landing/restaurant-landing-hero';
import RestaurantLandingCategories from '../landing/restaurant-landing-categories';
import RestaurantChefTeam from '../team/restaurant-chef-team';
import RestaurantTestimonial from '../testimonial/restaurant-testimonial';
import GalleryCarouselView from '../carousel-view/restaurant-carousel-gallery';
import RestaurantTextMenuView from './restaurant-text-menus';
 import MenusCarouselView from '../carousel-view/restaurant-carousel-menus';

// ----------------------------------------------------------------------

export default function RestaurantLandingView() {
  return (
    <>
      <RestaurantLandingHero />

      <MenusCarouselView />

      <RestaurantLandingCategories />

      <GalleryCarouselView />

      {/* <RestaurantChefTeam members={_members} /> */}

      <RestaurantTestimonial testimonials={_testimonials} />      

    </>
  );
}
