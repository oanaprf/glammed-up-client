import { compose, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { withUseState } from '@@hocs';
import { preferences } from '@@store/modules';

import BaseChangeThemeModal from './ChangeThemeModal';

const ChangeThemeModal = compose(
  connect(state => ({ theme: preferences.selectors.getTheme(state) })),
  withUseState('selectedTheme', ({ theme }) => theme),
  withHandlers({
    onChange: ({ setSelectedTheme }) => value => setSelectedTheme(value),
  }),
  withProps(({ selectedTheme }) => ({
    selectedOption: selectedTheme,
  }))
)(BaseChangeThemeModal);

export default ChangeThemeModal;
