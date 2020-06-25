/* eslint-disable camelcase */
import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import {
  themeFuchsia,
  themePurple,
  themeAqua,
  themeBlue,
  themeFire,
  themeLila,
} from '@@config';
import * as C from '@@utils/constants';

const themeMapping = {
  [C.THEME_COLORS.FUCHSIA]: themeFuchsia,
  [C.THEME_COLORS.PURPLE]: themePurple,
  [C.THEME_COLORS.AQUA]: themeAqua,
  [C.THEME_COLORS.BLUE]: themeBlue,
  [C.THEME_COLORS.FIRE]: themeFire,
  [C.THEME_COLORS.LILA]: themeLila,
};

const SecondaryColorIcon = ({ themeName, ...rest }) => (
  <Icon
    {...{
      ...rest,
      color: themeMapping[themeName].theme_colors.secondary,
    }}
  />
);

SecondaryColorIcon.propTypes = {
  themeName: PropTypes.string.isRequired,
};

export default SecondaryColorIcon;
