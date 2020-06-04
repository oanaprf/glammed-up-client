import React from 'react';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import * as S from './styled';

const NoImageSelected = () => (
  <S.RowContainer>
    <Icon
      {...{
        name: 'image',
        type: 'feather',
        size: 25,
        color: theme.colors.grey,
      }}
    />
    <S.StyledText>{t('service.noImageSelected')}</S.StyledText>
  </S.RowContainer>
);

export default NoImageSelected;
