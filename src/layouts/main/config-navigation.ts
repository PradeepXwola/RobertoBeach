import { paths } from 'src/routes/paths';
import { useTranslation } from 'react-i18next';
import path from 'path';

// ----------------------------------------------------------------------
export const useTranslatedConfig = () => {

  const { t } = useTranslation();

  const pageLinks = [
    {
      order: '1',
      subheader: t('titles.contact'),
      cover: '/assets/images/menu/menu_marketing.jpg',
      items: [
        { title: t('items.address'), path: "#" },
        { title: 'Am Eventpark 20, 85609 Aschheim', path: "#" },
        { title: t('items.caseStudies'), path: paths.marketing.caseStudies },
        { title: t('items.caseStudy'), path: paths.marketing.caseStudy },
        { title: t('items.blogPosts'), path: paths.marketing.posts },
        { title: t('items.blogPost'), path: paths.marketing.post },
        { title: t('items.about'), path: paths.marketing.about },
        { title: t('items.contact'), path: paths.marketing.contact },
      ],
    },
    {
      order: '6',
      subheader: t('titles.travel'),
      cover: '/assets/images/menu/menu_travel.jpg',
      items: [
        { title: t('items.landing'), path: paths.travel.root },
        { title: t('items.tours'), path: paths.travel.tours },
        { title: t('items.tour'), path: paths.travel.tour },
        { title: t('items.checkout'), path: paths.travel.checkout },
        { title: t('items.orderCompleted'), path: paths.travel.orderCompleted },
        { title: t('items.blogPosts'), path: paths.travel.posts },
        { title: t('items.blogPost'), path: paths.travel.post },
        { title: t('items.about'), path: paths.travel.about },
        { title: t('items.contact'), path: paths.travel.contact },
      ],
    },
    {
      order: '2',
      subheader: t('titles.career'),
      cover: '/assets/images/menu/menu_career.jpg',
      items: [
        { title: t('items.landing'), path: paths.career.root },
        { title: t('items.jobs'), path: paths.career.jobs },
        { title: t('items.job'), path: paths.career.job },
        { title: t('items.blogPosts'), path: paths.career.posts },
        { title: t('items.blogPost'), path: paths.career.post },
        { title: t('items.about'), path: paths.career.about },
        { title: t('items.contact'), path: paths.career.contact },
      ],
    },
    {
      order: '5',
      subheader: t('titles.eLearning'),
      cover: '/assets/images/menu/menu_elearning.jpg',
      items: [
        { title: t('items.landing'), path: paths.eLearning.root },
        { title: t('items.courses'), path: paths.eLearning.courses },
        { title: t('items.course'), path: paths.eLearning.course },
        { title: t('items.blogPosts'), path: paths.eLearning.posts },
        { title: t('items.blogPost'), path: paths.eLearning.post },
        { title: t('items.about'), path: paths.eLearning.about },
        { title: t('items.contact'), path: paths.eLearning.contact },
      ],
    },
    // {
    //   isNew: true,
    //   order: '3',
    //   subheader: t('titles.eCommerce'),
    //   cover: '/assets/images/menu/menu_ecommerce.jpg',
    //   items: [
    //     { title: t('items.landing'), path: paths.eCommerce.root },
    //     { title: t('items.products'), path: paths.eCommerce.products },
    //     { title: t('items.product'), path: paths.eCommerce.product },
    //     { title: t('items.cart'), path: paths.eCommerce.cart },
    //     { title: t('items.checkout'), path: paths.eCommerce.checkout },
    //     { title: t('items.orderCompleted'), path: paths.eCommerce.orderCompleted },
    //     { title: t('items.wishlist'), path: paths.eCommerce.wishlist },
    //     { title: t('items.compare'), path: paths.eCommerce.compare },
    //     { title: t('items.accountPersonal'), path: paths.eCommerce.account.personal },
    //     { title: t('items.accountWishlist'), path: paths.eCommerce.account.wishlist },
    //     { title: t('items.accountVouchers'), path: paths.eCommerce.account.vouchers },
    //     { title: t('items.accountOrders'), path: paths.eCommerce.account.orders },
    //     { title: t('items.accountPayment'), path: paths.eCommerce.account.payment },
    //   ],
    // },
    // {
    //   order: '4',
    //   subheader: t('titles.common'),
    //   items: [
    //     { title: t('items.loginCover'), path: paths.loginCover },
    //     { title: t('items.loginIllustration'), path: paths.loginIllustration },
    //     { title: t('items.loginBackground'), path: paths.loginBackground },
    //     { title: t('items.registerCover'), path: paths.registerCover },
    //     { title: t('items.registerIllustration'), path: paths.registerIllustration },
    //     { title: t('items.registerBackground'), path: paths.registerBackground },
    //     { title: t('items.forgotPassword'), path: paths.forgotPassword },
    //     { title: t('items.verifyCode'), path: paths.verify },
    //     { title: t('items.404Error'), path: paths.page404 },
    //     { title: t('items.500Error'), path: paths.page500 },
    //     { title: t('items.maintenance'), path: paths.maintenance },
    //     { title: t('items.comingSoon'), path: paths.comingsoon },
    //     { title: t('items.pricing01'), path: paths.pricing01 },
    //     { title: t('items.pricing02'), path: paths.pricing02 },
    //     { title: t('items.payment'), path: paths.payment },
    //     { title: t('items.support'), path: paths.support },
    //   ],
    // },
  ];

  const navConfig = [
    { title: t('titles.home'), path: '/home' },
    { title: t('titles.events'), path: paths.event.root},
    { title: t('titles.restaurants'), path: paths.restaurentDetails },
    { title: t('titles.volleyBall'), path: paths.VolleyBallLanding },
    { title: t('titles.beachClub'), path: '#' },
    { title: t('titles.contactUs'), path: paths.contactUs },
  ];
  return { pageLinks, navConfig };
};
