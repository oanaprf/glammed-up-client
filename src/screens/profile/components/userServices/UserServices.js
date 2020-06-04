import React from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';

import * as S from './styled';

const UserServices = ({ openModal }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    {[0, 1, 2, 3].map(v => (
      <S.StyledService key={v} userService />
    ))}
    <S.StyledButton onPress={() => openModal({ name: C.MODALS.ADD_SERVICE })}>
      <Icon
        {...{
          name: 'plus',
          type: 'feather',
          size: 25,
          color: theme.colors.white,
        }}
      />
    </S.StyledButton>
  </ScrollView>
);

UserServices.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(UserServices);
