import React from 'react';
import { View } from 'react-native';

import { t } from '@@config';
import * as S from './styled';

export default label => Component => props => (
  <View>
    <S.StyledLabel family="BOLD" size="XS" uppercase>
      {t(label)}
    </S.StyledLabel>
    <Component {...props} />
  </View>
);
