import { compose, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { preferences } from '@@store/modules';

import BaseChangeLanguageModal from './ChangeLanguageModal';

const ChangeLanguageModal = compose(
  connect(state => ({ language: preferences.selectors.getLanguage(state) })),
  withUseState('selectedLanguage', ({ language }) => language),
  withHandlers({
    onChange: ({ setSelectedLanguage }) => value => setSelectedLanguage(value),
  }),
  withProps(({ selectedLanguage }) => ({
    selectedOption: selectedLanguage,
  }))
)(BaseChangeLanguageModal);

export default ChangeLanguageModal;
