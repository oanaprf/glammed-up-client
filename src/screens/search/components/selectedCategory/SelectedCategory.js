import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { t, theme } from '@@config';

import * as S from './styled';

const SelectedCategory = ({ selectedCategory, onDeleteCategory }) => (
  <S.StyledButton onPress={onDeleteCategory}>
    <S.RowContainer>
      <S.StyledText size="XS">
        {t(`search.categories.${selectedCategory}`)}
      </S.StyledText>
      <Icon
        {...{
          name: 'x',
          type: 'feather',
          size: 15,
          color: theme.colors.white,
        }}
      />
    </S.RowContainer>
  </S.StyledButton>
);

SelectedCategory.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
};

export default SelectedCategory;
