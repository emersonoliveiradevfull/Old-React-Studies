import i18next from 'i18next'
import locizeBackend from 'i18next-locize-backend'
import locizeEditor from 'locize-editor'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";


i18next
  .use(locizeBackend)
  .use(locizeEditor)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['translations2'],
    defaultNS: 'translations2',
    debug: true,
    backend: {
      projectId: '40001ae0-6b9f-4eeb-bf7c-f78168ce9c86',
      apiKey: '049b97fc-f836-473d-aee2-7771fb77ee6d',
      referenceLng: 'en-US'
    },
    react: {
      useSuspense: false
    }
  })

export default i18next
