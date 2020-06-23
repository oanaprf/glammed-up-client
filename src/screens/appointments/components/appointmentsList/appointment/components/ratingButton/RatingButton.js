import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { theme } from '@@config';
import * as S from './styled';

const RatingButton = ({ openModal, service }) => (
  <S.StyledButton
    onPress={() => openModal({ name: C.MODALS.ADD_REVIEW, data: service })}
  >
    <Icon
      {...{
        name: 'staro',
        type: 'antdesign',
        size: 40,
        color: theme.colors.warning,
      }}
    />
  </S.StyledButton>
);

RatingButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
};

export default withOpenModal(RatingButton);
