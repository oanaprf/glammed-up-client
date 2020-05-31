import { withHandlers } from 'recompose';

import BaseSettingsButton from './SettingsButton';

const SettingsButton = withHandlers({
  onSettingsPress: ({ navigation }) => () => navigation.navigate('Settings'),
})(BaseSettingsButton);

export default SettingsButton;
