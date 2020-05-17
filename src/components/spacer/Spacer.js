import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Spacer = ({ height, ...rest }) => (
  <View {...{ style: { height }, ...rest }} />
);

Spacer.defaultProps = {
  height: 20,
};

Spacer.propTypes = {
  height: PropTypes.number,
};

export default Spacer;
