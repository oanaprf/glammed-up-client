import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Text, SecondaryColorIcon } from '@@components';
import {
  getFullName,
  getPhoneNumber,
  getAddress,
} from '@@store/modules/user/selectors';

import * as S from './styled';

const UserDetails = ({ user, onProviderNamePress }) => (
  <S.UserDetailsContainer>
    <TouchableOpacity onPress={onProviderNamePress} activeOpacity={0.6}>
      <Text size="L" family="BOLD">
        {getFullName(user)}
      </Text>
    </TouchableOpacity>
    <S.RowContainer>
      <SecondaryColorIcon
        {...{
          name: 'phone',
          type: 'feather',
          size: 15,
        }}
      />
      <S.StyledText size="XS">{getPhoneNumber(user)}</S.StyledText>
    </S.RowContainer>
    <S.RowContainer>
      <SecondaryColorIcon
        {...{
          name: 'map-pin',
          type: 'feather',
          size: 15,
        }}
      />
      <S.StyledText size="XS">{getAddress(user)}</S.StyledText>
    </S.RowContainer>
  </S.UserDetailsContainer>
);

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  onProviderNamePress: PropTypes.func.isRequired,
};

export default UserDetails;
