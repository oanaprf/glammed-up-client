import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { theme } from '@@config';
import * as S from './styled';

const RatingButton = ({ openModal }) => (
  <S.StyledButton onPress={() => openModal({ name: C.MODALS.ADD_REVIEW })}>
    <>
      <S.StyledText size="M">{'5'}</S.StyledText>
      <Icon
        {...{
          name: 'star',
          type: 'antdesign',
          size: 18,
          color: theme.colors.warning,
        }}
      />
    </>
  </S.StyledButton>
);

RatingButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(RatingButton);
