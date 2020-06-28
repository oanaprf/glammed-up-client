import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme, t } from '@@config';
import { Text } from '@@components';
import {
  getFullName,
  getProfilePicture,
  getEmail,
} from '@@store/modules/user/selectors';

import * as S from './styled';

const Credentials = ({ onPress, currentUser }) => (
  <S.CredentialsContainer onPress={onPress}>
    <>
      <S.StyledImage source={{ uri: getProfilePicture(currentUser) }} />
      <View style={{ flex: 1 }}>
        <S.WhiteText family="BOLD">{getFullName(currentUser)}</S.WhiteText>
        <S.WhiteText>{getEmail(currentUser)}</S.WhiteText>
        <S.RowContainerWithSpaceBetween>
          <S.RowContainer>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
              <Icon
                key={val}
                {...{
                  name: 'circle',
                  type: 'font-awesome',
                  size: 7,
                  color: theme.colors.white,
                  style: { marginRight: 2 },
                }}
              />
            ))}
          </S.RowContainer>
          <S.EditCredentialsContainer>
            <Text family="BOLD" uppercase>
              {t('common.edit')}
            </Text>
          </S.EditCredentialsContainer>
        </S.RowContainerWithSpaceBetween>
      </View>
    </>
  </S.CredentialsContainer>
);

Credentials.propTypes = {
  onPress: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default Credentials;
