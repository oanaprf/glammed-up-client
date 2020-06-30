import React from 'react';

import { theme } from '@@config';

import LoaderIcon from './LoaderIcon.container';
import * as S from './styled';

const BigLoaderIcon = () => (
  <S.LoaderContainer>
    <LoaderIcon size={40} color={theme.colors.black} />
  </S.LoaderContainer>
);

export default BigLoaderIcon;
