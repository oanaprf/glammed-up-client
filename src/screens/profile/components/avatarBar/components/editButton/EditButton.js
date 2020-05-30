import React from 'react';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const AvatarBar = () => (
  <S.StyledButton>
    <Icon
      {...{
        name: 'edit-2',
        type: 'feather',
        size: 20,
        color: theme.colors.theme_black_pink.primary,
      }}
    />
  </S.StyledButton>
);

export default AvatarBar;
