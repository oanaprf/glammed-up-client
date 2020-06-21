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

const ServiceDetails = ({ isUserService, service = {} }) => (
  <S.ServiceDetails>
    <S.RowContainer>
      <S.RowContainer>
        <S.WhiteTextWithPadding family="BOLD">
          {`${getPrice(service)}`}
        </S.WhiteTextWithPadding>
        <S.WhiteText size="XS">lei</S.WhiteText>
      </S.RowContainer>
      {service.averageRating && (
        <S.RowContainer>
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
        </S.RowContainer>
      )}
    </S.RowContainer>
    <S.RowContainer>
      <S.WhiteText family="BOLD" numberOfLines={2} style={{ flex: 0.9 }}>
        {getName(service)}
      </S.WhiteText>
      {!isUserService && (
        <S.WhiteText size="XS">{getProviderName(service)}</S.WhiteText>
      )}
    </S.RowContainer>
  </S.ServiceDetails>
);

ServiceDetails.propTypes = {
  isUserService: PropTypes.bool,
  service: PropTypes.object.isRequired,
};

export default ServiceDetails;
