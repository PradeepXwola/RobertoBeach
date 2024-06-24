import { lazy } from 'react';
import { Outlet } from 'react-router-dom';

import MainLayout from 'src/layouts/main';

// ----------------------------------------------------------------------

const BlogPage = lazy(() => import('src/pages/marketing/posts'));
const PostPage = lazy(() => import('src/pages/marketing/post'));
const AboutPage = lazy(() => import('src/pages/marketing/about'));
const ContactPage = lazy(() => import('src/pages/marketing/contact'));
const LandingPage = lazy(() => import('src/pages/events/landing'));
const ServicesPage = lazy(() => import('src/pages/marketing/services'));
const CaseStudyPage = lazy(() => import('src/pages/marketing/case-study'));
const EventCaseStudyPage = lazy(() => import('src/pages/events/case-study'))
const CaseStudiesPage = lazy(() => import('src/pages/marketing/case-studies'));
const EventCaseStudiesPage = lazy(() => import('src/pages/events/case-studies'))

// ----------------------------------------------------------------------

export const eventRoutes = [
  {
    path: 'event',
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
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: 'services', element: <ServicesPage /> },
          { path: 'case-studies', element: <EventCaseStudiesPage /> },
          { path: 'case-study', element: <EventCaseStudyPage /> },
          { path: 'posts', element: <BlogPage /> },
          { path: 'post', element: <PostPage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
        ],
      },
    ],
  },
];
