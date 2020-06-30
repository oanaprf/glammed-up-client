import { compose, withHandlers } from 'recompose';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { withCloseModal } from '@@hocs';
import { preferences } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(null, {
    changeTheme: preferences.actions.changeTheme,
  }),
  withHandlers({
    onSave: ({ selectedTheme, closeModal, changeTheme }) => async () => {
      await AsyncStorage.setItem('@APP:theme', selectedTheme);
      changeTheme({ theme: selectedTheme });
      closeModal();
    },
  })
)(BaseSaveButton);

export default SaveButton;
