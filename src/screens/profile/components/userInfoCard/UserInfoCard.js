import React from 'react';
import PropTypes from 'prop-types';

import { SecondaryColorIcon } from '@@components';
import { getPhoneNumber, getAddress } from '@@store/modules/user/selectors';

import * as S from './styled';

const UserInfoCard = ({ user }) => (
  <S.CardContainer>
    {getPhoneNumber(user) ? (
      <S.StyledRow>
        <SecondaryColorIcon
          {...{
            name: 'phone',
            type: 'feather',
            size: 22,
          }}
        />
        <S.StyledText size="M">{getPhoneNumber(user)}</S.StyledText>
      </S.StyledRow>
    ) : null}
    {getAddress(user) ? (
      <S.StyledRow>
        <SecondaryColorIcon
          {...{
            name: 'map-pin',
            type: 'feather',
            size: 22,
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
