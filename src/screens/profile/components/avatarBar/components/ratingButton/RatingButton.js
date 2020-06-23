import React from 'react';
import { Icon } from 'react-native-elements';

import { withOpenModal } from '@@hocs';
import { theme } from '@@config';
import * as S from './styled';

const RatingButton = () => (
  <S.StyledButton>
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

export default withOpenModal(RatingButton);
