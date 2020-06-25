import React from 'react';
import PropTypes from 'prop-types';

import { Spacer, SecondaryColorIcon } from '@@components';

import * as S from './styled';

const ProviderInfo = ({ provider = {} }) => (
  <S.ProviderInfoContainer>
    {provider.phoneNumber && (
      <S.RowContainer>
        <SecondaryColorIcon
          {...{
            name: 'phone',
            type: 'feather',
            size: 22,
          }}
        />
        <S.FlexText>{provider.phoneNumber}</S.FlexText>
      </S.RowContainer>
    )}
    <Spacer height={2} />
    {provider.address && (
      <S.RowContainer>
        <SecondaryColorIcon
          {...{
            name: 'map-pin',
            type: 'feather',
            size: 22,
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
