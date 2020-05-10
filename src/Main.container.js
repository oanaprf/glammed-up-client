import { compose, branch, renderComponent } from 'recompose';

import { withUseState, withOnMount } from '@@hocs';
import { initI18n } from '@@config';
import { SplashScreen } from '@@components';

import BaseMain from './Main';

const Main = compose(
  withUseState('translationsLoaded', false),
  withOnMount(async ({ setTranslationsLoaded }) => {
    await initI18n();
    setTranslationsLoaded(true);
  }),
  branch(
    ({ translationsLoaded }) => translationsLoaded,
    renderComponent(BaseMain),
    renderComponent(SplashScreen)
  )
)(BaseMain);

export default Main;
