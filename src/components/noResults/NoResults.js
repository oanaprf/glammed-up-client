import React from 'react';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import * as S from './styled';

const NoResults = () => (
  <S.NoResultsContainer>
    <Icon
      {...{
        name: 'search',
        type: 'feather',
        size: 80,
        color: theme.colors.lightGrey,
      }}
    />
    <S.StyledText size="L">{t('search.noResults')}</S.StyledText>
  </S.NoResultsContainer>
);

export default NoResults;
