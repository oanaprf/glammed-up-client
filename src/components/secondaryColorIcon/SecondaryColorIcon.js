/* eslint-disable camelcase */
import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme, theme_purple } from '@@config';

const themeMapping = {
  FUCHSIA: theme,
  PURPLE: theme_purple,
};

const SecondaryColorIcon = ({ themeName, ...rest }) => (
  <Icon
    {...{
      ...rest,
      color: themeMapping[themeName].colors.theme_black_pink.secondary,
    }}
  />
);

SecondaryColorIcon.propTypes = {
  themeName: PropTypes.string.isRequired,
};

export default SecondaryColorIcon;
