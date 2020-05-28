/* eslint-disable global-require */
import { compose } from 'recompose';
import { connect } from 'react-redux';
import firebase from 'firebase';
import * as Font from 'expo-font';
import * as Facebook from 'expo-facebook';

import { withUseState, withOnMount } from '@@hocs';
import { initI18n, firebaseConfig } from '@@config';
import { user } from '@@store/modules';

import BaseMain from './Main';

const fonts = {
  MontserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
  MontserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
};

const Main = compose(
  withUseState('translationsLoaded', false),
  withOnMount(async ({ setTranslationsLoaded }) => {
    await initI18n();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    await Font.loadAsync(fonts);
    await Facebook.initializeAsync('257066585530930');
    setTranslationsLoaded(true);
  }),
  connect(state => ({
    isLoggedIn: user.selectors.isLoggedIn(state),
  }))
)(BaseMain);

export default Main;
