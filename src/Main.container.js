/* eslint-disable global-require */
import { compose } from 'recompose';
import { connect } from 'react-redux';
import firebase from 'firebase';
import * as Font from 'expo-font';
import { AsyncStorage } from 'react-native';
import I18n from 'i18n-js';
// import * as Facebook from 'expo-facebook';

import { withUseState, withOnMount } from '@@hocs';
import { initI18n, firebaseConfig } from '@@config';
import { user, preferences } from '@@store/modules';

import BaseMain from './Main';

const fonts = {
  MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
  MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
};

const Main = compose(
  withUseState('translationsLoaded', false),
  connect(
    state => ({
      isLoggedIn: user.selectors.isLoggedIn(state),
      themeName: preferences.selectors.getTheme(state),
    }),
    {
      changeLanguage: preferences.actions.changeLanguage,
      changeTheme: preferences.actions.changeTheme,
    }
  ),
  withOnMount(
    async ({ setTranslationsLoaded, changeLanguage, changeTheme }) => {
      await initI18n();
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      await Font.loadAsync(fonts);
      // await Facebook.initializeAsync('257066585530930');
      changeLanguage({ language: I18n.locale });
      changeTheme({
        theme: (await AsyncStorage.getItem('@APP:theme')) || 'FUCHSIA',
      });

      setTranslationsLoaded(true);
    }
  )
)(BaseMain);

export default Main;
