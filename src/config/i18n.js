import I18n from 'i18n-js';
import { AsyncStorage } from 'react-native';
import * as Localization from 'expo-localization';

import en from '@@locales/en.json';
import ro from '@@locales/ro.json';

I18n.fallbacks = true;
I18n.translations = {
  en,
  ro,
};

export const initI18n = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem('@APP:language');
    const localeLanguage = await Localization.locale;
    I18n.locale = savedLanguage || localeLanguage.substr(0, 2);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Unable to get language', err);
  }
};

export const { t } = I18n;
