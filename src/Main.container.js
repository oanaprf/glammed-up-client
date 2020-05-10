import { compose } from 'recompose';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { withUseState, withOnMount } from '@@hocs';
import { initI18n, firebaseConfig } from '@@config';
import { user } from '@@store/modules';

import BaseMain from './Main';

const Main = compose(
  withUseState('translationsLoaded', false),
  withOnMount(async ({ setTranslationsLoaded }) => {
    await initI18n();
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    setTranslationsLoaded(true);
  }),
  connect(state => ({
    isLoggedIn: user.selectors.isLoggedIn(state),
  }))
)(BaseMain);

export default Main;
