import React from 'react';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import { withOpenModal } from '@@hocs';
import { theme } from '@@config';
import * as C from '@@utils/constants';

import Appointment from './appointment';
import * as S from './styled';

const Appointments = ({ openModal }) => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
        alignItems: 'center',
      }}
    >
      <Appointment />
      <Appointment />
      <Appointment />
      <S.StyledButton
        onPress={() => openModal({ name: C.MODALS.ADD_MANUAL_APPOINTMENT })}
      >
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
  </>
);

Appointments.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(Appointments);
