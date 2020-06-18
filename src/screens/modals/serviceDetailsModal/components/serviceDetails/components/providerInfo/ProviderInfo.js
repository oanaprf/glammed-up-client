import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Spacer } from '@@components';

import * as S from './styled';

const ProviderInfo = ({ provider = {} }) => (
  <S.ProviderInfoContainer>
    {provider.phoneNumber && (
      <S.RowContainer>
        <Icon
          {...{
            name: 'phone',
            type: 'feather',
            size: 22,
            color: theme.colors.theme_black_pink.secondary,
          }}
        />
        <S.FlexText>{provider.phoneNumber}</S.FlexText>
      </S.RowContainer>
    )}
    <Spacer height={2} />
    {provider.address && (
      <S.RowContainer>
        <Icon
          {...{
            name: 'map-pin',
            type: 'feather',
            size: 22,
            color: theme.colors.theme_black_pink.secondary,
          }}
        />
        <S.FlexText>{provider.address}</S.FlexText>
      </S.RowContainer>
    )}
  </S.ProviderInfoContainer>
);

ProviderInfo.propTypes = {
  provider: PropTypes.object.isRequired,
};

export default ProviderInfo;
