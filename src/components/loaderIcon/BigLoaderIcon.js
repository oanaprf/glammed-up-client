import React from 'react';
import { View } from 'react-native';

import { theme } from '@@config';
import LoaderIcon from './LoaderIcon.container';

const BigLoaderIcon = () => (
  <View style={{ marginTop: 40 }}>
    <LoaderIcon size={40} color={theme.colors.black} />
  </View>
);

export default BigLoaderIcon;
