import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const ServiceDetails = ({ userService }) => (
  <S.ServiceDetails>
    <S.RowContainer>
      <S.RowContainer>
        <S.PriceValueText>100</S.PriceValueText>
        <S.PriceCurrencyText>lei</S.PriceCurrencyText>
      </S.RowContainer>
      <S.RowContainer>
        <S.RatingText>5</S.RatingText>
        <Icon
          {...{
            name: 'star',
            type: 'antdesign',
            size: 18,
            color: theme.colors.warning,
          }}
        />
      </S.RowContainer>
    </S.RowContainer>
    <S.RowContainer>
      <S.ServiceNameText numberOfLines={2}>Unghii cu gel</S.ServiceNameText>
      {!userService && <S.PriceCurrencyText>Oana Profir</S.PriceCurrencyText>}
    </S.RowContainer>
  </S.ServiceDetails>
);

ServiceDetails.propTypes = {
  userService: PropTypes.bool,
};

export default ServiceDetails;
