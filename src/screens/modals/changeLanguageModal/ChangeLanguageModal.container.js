import { compose, withProps, withHandlers } from 'recompose';
import I18n from 'i18n-js';

import { withUseState } from '@@hocs';

import BaseChangeLanguageModal from './ChangeLanguageModal';

const languages = ['ro', 'en'];

const ChangeLanguageModal = compose(
  withUseState('selectedLanguage', () => I18n.locale),
  withHandlers({
    onChange: ({ setSelectedLanguage }) => index =>
      setSelectedLanguage(languages[index]),
  }),
  withProps(({ selectedLanguage }) => ({
    selectedOption: languages.indexOf(selectedLanguage),
  }))
)(BaseChangeLanguageModal);

export default ChangeLanguageModal;
