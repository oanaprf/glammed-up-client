import React from 'react';
import { View } from 'react-native';

import * as S from './styled';

export default label => Component => props => (
  <View>
    <S.StyledLabel family="BOLD" size="XS" uppercase>
      {label}
    </S.StyledLabel>
    <Component {...props} />
  </View>
);
