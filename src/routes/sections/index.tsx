import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

import { authRoutes } from './auth';
import { errorRoutes } from './error';
import { commonRoutes } from './common';
import { careerRoutes } from './career';
import { travelRoutes } from './travel';
import { marketingRoutes } from './marketing';
import { eLearningRoutes } from './elearning';
import { eCommerceRoutes } from './ecommerce';
import { componentsRoutes } from './components';
import { eventRoutes } from './event';
// import EventsDetailsPage from 'src/pages/events/eventsDetails';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/home'));
const SupportPage = lazy(() => import('src/pages/support'));
const ContactUsPage = lazy(() => import('src/pages/contact-us'));
const EventsDetailsPage = lazy(() => import('src/pages/events/eventsDetails'))
const EventsLandingPage = lazy(() => import('src/pages/events/landing'))
const LandingPage = lazy(() => import('src/pages/travel/landing'));
const RestaurantDetailsPage = lazy(() => import('src/pages/restaurent/restaurentDetails'))
const VolleyBallDetailsPage = lazy(() => import('src/pages/volleyBall/volleyBallDetails'))

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      element: (
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          element: (
            <MainLayout disabledSpacing>
              <LandingPage />
            </MainLayout>
          ),
          index: true,
        },

        {
          path: 'support',
          element: (
            <MainLayout>
              <SupportPage />
            </MainLayout>
          ),
        },

        {
          path: 'contactUs',
          element: (
            <MainLayout>
              <ContactUsPage />
            </MainLayout>
          ),
        },

        // {
        //   path: 'eventDetails',
        //   element: (
        //     <MainLayout>
        //       <EventsLandingPage />
        //     </MainLayout>
        //   ),
        // },

        {
          path: 'restaurentDetails',
          element: (
            <MainLayout>
              <RestaurantDetailsPage />
            </MainLayout>
          ),
        },

        {
          path: 'VolleyBallDetails',
          element: (
            <MainLayout>
              <VolleyBallDetailsPage />
            </MainLayout>
          ),
        },

        {
          path: 'home',
          element: (
            <MainLayout headerOnDark>
              <LandingPage />
            </MainLayout>
          ),
          index: true,
        },

        ...eventRoutes,

        ...marketingRoutes,

        ...travelRoutes,

        ...careerRoutes,

        ...eLearningRoutes,

        ...eCommerceRoutes,

        ...componentsRoutes,

        ...authRoutes,

        ...errorRoutes,

        ...commonRoutes,

        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
  ]);
}
