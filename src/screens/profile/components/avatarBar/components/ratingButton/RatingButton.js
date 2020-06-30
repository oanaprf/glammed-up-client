import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { withOpenModal } from '@@hocs';
import { theme } from '@@config';
import { getRating } from '@@store/modules/services/selectors';

import * as S from './styled';

const RatingButton = ({ user }) => (
  <S.StyledButton user={user}>
    <>
      <S.StyledText size="M">{`${getRating(user) || 0}`}</S.StyledText>
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
  user: PropTypes.object.isRequired,
};

export default withOpenModal(RatingButton);
