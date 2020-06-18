import React from 'react';
import { ScrollView } from 'react-native';

import * as S from './styled';

const User = () => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingVertical: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    {[0, 1, 2, 3].map(v => (
      <S.StyledService key={v} isUserService />
    ))}
  </ScrollView>
);

export default User;
