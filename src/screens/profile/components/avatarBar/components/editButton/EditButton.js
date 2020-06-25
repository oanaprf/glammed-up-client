import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import { theme } from '@@config';
import * as S from './styled';

const EditButton = ({ openModal, isOwnProfile, user }) => (
  <S.StyledButton
    {...{
      ...(isOwnProfile && {
        onPress: () => openModal({ name: C.MODALS.EDIT_USER, data: user }),
      }),
      isOwnProfile,
    }}
  >
    <Icon
      {...{
        name: 'edit-2',
        type: 'feather',
        size: 24,
        color: theme.colors.black,
      }}
    />
  </S.StyledButton>
);

EditButton.propTypes = {
  openModal: PropTypes.func.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default withOpenModal(EditButton);
