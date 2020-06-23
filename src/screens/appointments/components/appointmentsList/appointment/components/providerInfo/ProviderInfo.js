import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { Spacer } from '@@components';
import { getPhoneNumber, getAddress } from '@@store/modules/user/selectors';

import * as S from '../../styled';

const ProviderInfo = ({ provider = {} }) => (
  <S.ProviderInfoContainer>
    <S.RowContainer>
      <Icon
        {...{
          name: 'phone',
          type: 'feather',
          size: 22,
          color: theme.colors.black,
        }}
      />
      <S.FlexText size="XS">{getPhoneNumber(provider)}</S.FlexText>
    </S.RowContainer>
    <Spacer height={2} />
    <S.RowContainer>
      <Icon
        {...{
          name: 'map-pin',
          type: 'feather',
          size: 22,
          color: theme.colors.black,
        }}
      />
      <S.FlexText size="XS">{getAddress(provider)}</S.FlexText>
    </S.RowContainer>
  </S.ProviderInfoContainer>
);

ProviderInfo.propTypes = {
  provider: PropTypes.object.isRequired,
};

export default ProviderInfo;
