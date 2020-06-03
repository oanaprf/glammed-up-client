import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import * as S from './styled';

const ServiceDetails = ({ userService }) => (
  <S.ServiceDetails>
    <S.RowContainer>
      <S.RowContainer>
        <S.WhiteTextWithPadding family="BOLD">100</S.WhiteTextWithPadding>
        <S.WhiteText size="XS">lei</S.WhiteText>
      </S.RowContainer>
      <S.RowContainer>
        <S.WhiteTextWithPadding family="BOLD">5</S.WhiteTextWithPadding>
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
      <S.WhiteText family="BOLD" numberOfLines={2}>
        Unghii cu gel
      </S.WhiteText>
      {!userService && <S.WhiteText size="XS">Oana Profir</S.WhiteText>}
    </S.RowContainer>
  </S.ServiceDetails>
);

ServiceDetails.propTypes = {
  userService: PropTypes.bool,
};

export default ServiceDetails;
