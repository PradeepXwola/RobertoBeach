import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import { localStorageGetItem } from 'src/utils/storage-available';

import { defaultLang } from './config-lang';

import enTranslation from './lang/en.json';
import frTranslation from './lang/fr.json';
import deTranslation from './lang/de.json'

const lng = localStorageGetItem('i18nextLng', defaultLang.value);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translations: enTranslation },
      fr: { translations: frTranslation },
      de: { translations: deTranslation },
      // cn: { translations: translationCn },
      // ar: { translations: translationAr },
    },
    lng,
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
  });


