import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { theme } from '@@config';
import * as S from './styled';

const RatingButton = ({ openModal, appointment }) => (
  <S.StyledButton
    onPress={() =>
      openModal({ name: C.MODALS.CANCEL_APPOINTMENT_MODAL, data: appointment })
    }
  >
    <Icon
      {...{
        name: 'x',
        type: 'feather',
        size: 35,
        color: theme.colors.error,
      }}
    />
  </S.StyledButton>
);

RatingButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  appointment: PropTypes.object.isRequired,
};

export default withOpenModal(RatingButton);
