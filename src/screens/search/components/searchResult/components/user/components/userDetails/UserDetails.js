import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { Text } from '@@components';
import {
  getFullName,
  getPhoneNumber,
  getAddress,
} from '@@store/modules/user/selectors';

import * as S from './styled';

const UserDetails = ({ user }) => (
  <S.UserDetailsContainer>
    <Text size="L" family="BOLD">
      {getFullName(user)}
    </Text>
    <S.RowContainer>
      <Icon
        {...{
          name: 'phone',
          type: 'feather',
          size: 15,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.StyledText size="XS">{getPhoneNumber(user)}</S.StyledText>
    </S.RowContainer>
    <S.RowContainer>
      <Icon
        {...{
          name: 'map-pin',
          type: 'feather',
          size: 15,
          color: theme.colors.theme_black_pink.secondary,
        }}
      />
      <S.StyledText size="XS">{getAddress(user)}</S.StyledText>
    </S.RowContainer>
  </S.UserDetailsContainer>
);

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserDetails;
