import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { getPhoneNumber, getAddress } from '@@store/modules/user/selectors';

import * as S from './styled';

const UserInfoCard = ({ user }) => (
  <S.CardContainer>
    {getPhoneNumber(user) ? (
      <S.StyledRow>
        <Icon
          {...{
            name: 'phone',
            type: 'feather',
            size: 22,
            color: theme.colors.theme_black_pink.secondary,
          }}
        />
        <S.StyledText size="M">{getPhoneNumber(user)}</S.StyledText>
      </S.StyledRow>
    ) : null}
    {getAddress(user) ? (
      <S.StyledRow>
        <Icon
          {...{
            name: 'map-pin',
            type: 'feather',
            size: 22,
            color: theme.colors.theme_black_pink.secondary,
          }}
        />
        <S.StyledText family="REGULAR">{getAddress(user)}</S.StyledText>
      </S.StyledRow>
    ) : null}
  </S.CardContainer>
);

UserInfoCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfoCard;
