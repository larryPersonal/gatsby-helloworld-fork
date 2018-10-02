import { addLocaleData } from 'react-intl'
// Require specific locale data for locales in use
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'
import de from 'react-intl/locale-data/de'
import 'intl/locale-data/jsonp/de'


// Add concatenated locale data
addLocaleData([...en, ...de])

export const locales = ['en', 'de'] // Current locales in use
export const defaultLocale = 'en'
