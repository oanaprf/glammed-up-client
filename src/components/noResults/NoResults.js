import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { t, theme } from '@@config';
import * as S from './styled';

const NoResults = ({ message = 'search.noResults' }) => (
  <S.NoResultsContainer>
    {message === 'search.noResults' ? (
      <Icon
        {...{
          name: 'search',
          type: 'feather',
          size: 80,
          color: theme.colors.lightGrey,
        }}
      />
    ) : null}
    <S.StyledText size="M">{t(message)}</S.StyledText>
  </S.NoResultsContainer>
);

NoResults.propTypes = {
  message: PropTypes.string,
};

export default NoResults;
