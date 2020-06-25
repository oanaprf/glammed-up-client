import { compose, withHandlers } from 'recompose';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import { withCloseModal } from '@@hocs';
import { user, preferences } from '@@store/modules';

import BaseSaveButton from './SaveButton';

const SaveButton = compose(
  withCloseModal,
  connect(null, {
    logout: user.actions.logout,
    changeTheme: preferences.actions.changeTheme,
  }),
  withHandlers({
    onSave: ({
      selectedTheme,
      closeModal,
      logout,
      changeTheme,
    }) => async () => {
      await AsyncStorage.setItem('@APP:theme', selectedTheme);
      changeTheme({ theme: selectedTheme });
      closeModal();
      logout();
    },
  })
)(BaseSaveButton);

export default SaveButton;
