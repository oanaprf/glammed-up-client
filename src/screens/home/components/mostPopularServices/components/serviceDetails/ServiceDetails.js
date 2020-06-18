import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import {
  getPrice,
  getName,
  getRating,
  getProviderName,
} from '@@store/modules/services/selectors';
import * as S from './styled';

const ServiceDetails = ({ service = {} }) => (
  <S.ServiceDetails>
    <S.RowContainer>
      <S.WhiteTextWithPadding family="BOLD">
        {`${getPrice(service)}`}
      </S.WhiteTextWithPadding>
      <S.WhiteText size="XS">lei</S.WhiteText>
    </S.RowContainer>
    <S.RowSpaceBetweenContainer>
      <S.WhiteText family="BOLD" numberOfLines={2}>
        {getName(service)}
      </S.WhiteText>
      <S.RowSpaceBetweenContainer>
        <S.WhiteTextWithPadding family="BOLD">
          {`${getRating(service)}`}
        </S.WhiteTextWithPadding>
        <Icon
          {...{
            name: 'star',
            type: 'antdesign',
            size: 18,
            color: theme.colors.warning,
          }}
        />
      </S.RowSpaceBetweenContainer>
    </S.RowSpaceBetweenContainer>
    <S.WhiteText size="XS">{getProviderName(service)}</S.WhiteText>
  </S.ServiceDetails>
);

ServiceDetails.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceDetails;
