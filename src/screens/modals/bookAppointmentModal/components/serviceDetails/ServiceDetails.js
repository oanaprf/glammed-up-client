import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { theme } from '@@config';
import { Text } from '@@components';
import {
  getName,
  getPrice,
  getRating,
  getProviderName,
} from '@@store/modules/services/selectors';
import * as S from './styled';

const ServiceDetails = ({ service }) => (
  <S.ServiceDetailsContainer>
    <S.RowContainer>
      <Text size="M" family="BOLD">
        {getName(service)}
      </Text>
      <S.RowContainer>
        <S.TextWithPadding size="M" family="BOLD">
          {`${getPrice(service)}`}
        </S.TextWithPadding>
        <Text>lei</Text>
      </S.RowContainer>
    </S.RowContainer>
    <S.RowContainer>
      <Text>{getProviderName(service)}</Text>
      <S.RowContainer>
        <S.TextWithPadding size="M" family="BOLD">
          {`${getRating(service)}`}
        </S.TextWithPadding>
        <Icon
          {...{
            name: 'star',
            type: 'antdesign',
            size: 18,
            color: theme.colors.warning,
          }}
        />
      </S.RowContainer>
    </S.RowContainer>
  </S.ServiceDetailsContainer>
);

ServiceDetails.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceDetails;
