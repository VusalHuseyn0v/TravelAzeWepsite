import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// AZ
import navbarAZ from './locales/az/navbar.json';
import mainAZ from './locales/az/main.json';
import cardsAZ from './locales/az/cards.json';
import footerAZ from './locales/az/footer.json';
import aboutPageAZ from "./locales/az/about.json"
import ContactAZ from './locales/az/contact.json'
import ismayilliAZ from './locales/az/ismayilli.json'
import lenkeranAZ from './locales/az/lenkeran.json'
import lerikAZ from './locales/az/lerik.json'
import qaxAZ from './locales/az/qax.json'
import qebeleAZ from './locales/az/qebele.json'
import qubaAZ from './locales/az/quba.json'
import qusarAZ from './locales/az/qusar.json'
import sekiAZ from './locales/az/seki.json'
import zaqatalaAZ from './locales/az/zaqatala.json'

// RU
import navbarRU from './locales/ru/navbar.json';
import mainRU from './locales/ru/main.json';
import cardsRU from './locales/ru/cards.json';
import footerRU from './locales/ru/footer.json';
import aboutPageRU from "./locales/ru/about.json"
import ContactRU from './locales/ru/contact.json'
import ismayilliRU from './locales/ru/ismayilli.json'
import lenkeranRU from './locales/ru/lenkeran.json'
import lerikRU from './locales/ru/lerik.json'
import qaxRU from './locales/ru/qax.json'
import qebeleRU from './locales/ru/qebele.json'
import qubaRU from './locales/ru/quba.json'
import qusarRU from './locales/ru/qusar.json'
import sekiRU from './locales/ru/seki.json'
import zaqatalaRU from './locales/ru/zaqatala.json'

// EN
import navbarEN from './locales/en/navbar.json';
import mainEN from './locales/en/main.json';
import cardsEN from './locales/en/cards.json';
import footerEN from './locales/en/footer.json';
import aboutPageEN from "./locales/en/about.json"
import ContactEN from './locales/en/contact.json'
import ismayilliEN from './locales/en/ismayilli.json'
import lenkeranEN from './locales/en/lenkeran.json'
import lerikEN from './locales/en/lerik.json'
import qaxEN from './locales/en/qax.json'
import qebeleEN from './locales/en/qebele.json'
import qubaEN from './locales/en/quba.json'
import qusarEN from './locales/en/qusar.json'
import sekiEN from './locales/en/seki.json'
import zaqatalaEN from './locales/en/zaqatala.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      az: {
        navbar: navbarAZ,
        main: mainAZ,
        cards: cardsAZ,
        footer: footerAZ,
        aboutPage: aboutPageAZ,
        contact: ContactAZ,
        ismayilli: ismayilliAZ,
        lenkeran: lenkeranAZ,
        lerik: lerikAZ,
        qax: qaxAZ,
        qebele: qebeleAZ,
        quba: qubaAZ,
        qusar: qusarAZ,
        seki: sekiAZ,
        zaqatala: zaqatalaAZ,
      },

      ru: {
        navbar: navbarRU,
        main: mainRU,
        cards: cardsRU,
        footer: footerRU,
        aboutPage: aboutPageRU,
        contact: ContactRU,
        ismayilli: ismayilliRU,
        lenkeran: lenkeranRU,
        lerik: lerikRU,
        qax: qaxRU,
        qebele: qebeleRU,
        quba: qubaRU,
        qusar: qusarRU,
        seki: sekiRU,
        zaqatala: zaqatalaRU,
      },

      en: {
        navbar: navbarEN,
        main: mainEN,
        cards: cardsEN,
        footer: footerEN,
        aboutPage: aboutPageEN,
        contact: ContactEN,
        ismayilli: ismayilliEN,
        lenkeran: lenkeranEN,
        lerik: lerikEN,
        qax: qaxEN,
        qebele: qebeleEN,
        quba: qubaEN,
        qusar: qusarEN,
        seki: sekiEN,
        zaqatala: zaqatalaEN,
      }
    },
    fallbackLng: 'az',
    ns: ['navbar', 'main', 'cards', 'footer', 'about', 'contact', 'ismayilli', 'lenkeran', 'lerik', 'qax', 'qebele', 'quba', 'qusar', 'seki', 'zaqatala'],
    defaultNS: 'navbar',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
