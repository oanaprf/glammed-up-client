import { connect } from 'react-redux';
import { preferences } from '@@store/modules';

import BaseSecondaryColorIcon from './SecondaryColorIcon';

const SecondaryColorIcon = connect(state => ({
  themeName: preferences.selectors.getTheme(state),
}))(BaseSecondaryColorIcon);

export default SecondaryColorIcon;
