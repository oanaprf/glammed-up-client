/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as S from './styled';

const icons = {
  EYELASHES: require('@@assets/images/eyelashes.png'),
  EYEBROWS: require('@@assets/images/eyebrows.png'),
  MAKE_UP: require('@@assets/images/make_up.png'),
  NAILS: require('@@assets/images/nails.png'),
  HAIR: require('@@assets/images/hair.png'),
  FACIALS: require('@@assets/images/facials.png'),
  WAXING: require('@@assets/images/waxing.png'),
  MASSAGE: require('@@assets/images/massage.png'),
  OTHER: require('@@assets/images/others.png'),
};

const Category = ({ category, onSelectCategory }) => (
  <S.ButtonContainer onPress={onSelectCategory}>
    <>
      <S.StyledImage source={icons[category]} />
      <S.StyledText size="M" family="REGULAR">
        {t(`search.categories.${category}`)}
      </S.StyledText>
    </>
  </S.ButtonContainer>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default Category;
