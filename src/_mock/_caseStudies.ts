import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------


const EVENT_TITLE = [
  'Fotoshootings',
  'Teambuilding',
  'Firmenevents',
  'Privatfeiern',
  'Sonstiges',
  'Kreativworkshop',
  'Sommerfest',
  'Weihnachtsfeier',
];

const TITLE = [
  'Bank of America',
  'Technology Nixon',
  'Turn Key Smart',
  'Digital Shose',
  'Action Car',
  'The Zone UI',
  'Minimal UI',
  'Network Firefox',
];

const CONTENT = `
<h4>Roberto Beach Events Brief</h4>

<br/>
<p>Our creative and experienced event team will be happy to put together an individual concept based on a given theme or make suggestions for unforgettable, extraordinary theme parties.</p>
<br/>
<p>Depending on the occasion, we transform our rooms into small and large experiences.</p>
<br/>
<p>ROBERTOBEACH leaves plenty of scope for event visions. We transform wishes into beautiful reality and enable the realization of individual event ideas.</p>
<br/>
<p>Our in-house catering offers a “carefree service” – whether Mediterranean, exotic or rustic – we put together individual themed buffets, menus and finger food variations for you and your event.</p>
<br/>
<p>Would you like the right entertainment program for your celebration?</p>
<br/>
<p>We can provide you with musicians, DJs, presenters, magicians, etc. We only provide professionally trained staff for the event. Whether attentive, reserved or cheerful, we have the right service for every occasion.</p>
<br/>
<p>Of course, our younger guests are not neglected either. We offer appropriate childcare and entertainment for every age group. Children's entertainers ensure unlimited fun and good humor. Our kitchen is also well prepared with children's catering.</p>

<br/>
<br/>
`;

export const _eventCaseStudies = TITLE.map((_, index) => {
  const galleryImgs = [
    _mock.image.events(0),
    _mock.image.events(1),
    _mock.image.events(2),
    _mock.image.events(3),
    _mock.image.events(4),
    _mock.image.events(5),
  ];

  return {
    id: _mock.id(index),
    content: CONTENT,
    title: EVENT_TITLE[index],
    category: _tags[index],
    createdAt: _mock.time(index),
    website: 'https://robertobeach.de/home/events',
    description: _mock.description(index),
    heroUrl: '/assets/images/events/event_post_hero.jpeg',
    coverUrl: `/assets/images/events/event_${index + 1}.jpeg`,
    how_we_work:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    results:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    galleryImgs,
  };
});

export const _caseStudies = TITLE.map((_, index) => {
  const galleryImgs = [
    _mock.image.marketing(0),
    _mock.image.marketing(1),
    _mock.image.marketing(2),
    _mock.image.marketing(3),
    _mock.image.marketing(4),
    _mock.image.marketing(5),
  ];

  return {
    id: _mock.id(index),
    content: CONTENT,
    title: TITLE[index],
    category: _tags[index],
    createdAt: _mock.time(index),
    website: 'https://example.com/',
    description: _mock.description(index),
    heroUrl: '/assets/images/marketing/marketing_post_hero.jpg',
    coverUrl: `/assets/images/marketing/marketing_${index + 1}.jpg`,
    how_we_work:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    results:
      'Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi',
    galleryImgs,
  };
});
