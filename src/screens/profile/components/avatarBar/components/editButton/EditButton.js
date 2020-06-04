import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { theme } from '@@config';
import * as S from './styled';

const EditButton = ({ openModal }) => (
  <S.StyledButton onPress={() => openModal({ name: C.MODALS.EDIT_USER })}>
    <Icon
      {...{
        name: 'edit-2',
        type: 'feather',
        size: 20,
        color: theme.colors.theme_black_pink.primary,
      }}
    />
  </S.StyledButton>
);

EditButton.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default withOpenModal(EditButton);
