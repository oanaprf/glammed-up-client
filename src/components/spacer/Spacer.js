import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Spacer = ({ height }) => <View style={{ height }} />;

Spacer.defaultProps = {
  height: 20,
};

Spacer.propTypes = {
  height: PropTypes.number,
};

export default Spacer;
