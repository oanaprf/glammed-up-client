import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { Text } from '@@components';
import {
  getPrice,
  getName,
  getRating,
  getProviderName,
  getDurationHours,
  getDurationMinutes,
} from '@@store/modules/services/selectors';

import * as S from './styled';

const ServiceInfo = ({ service = {} }) => (
  <View>
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
      {service.averageRating && (
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
      )}
    </S.RowContainer>
    <S.RowContainer>
      <S.RowContainer>
        {getDurationHours(service) ? (
          <>
            <S.TextWithPadding family="BOLD">
              {`${getDurationHours(service)}`}
            </S.TextWithPadding>
            <Text>h </Text>
          </>
        ) : null}
        {getDurationMinutes(service) ? (
          <>
            <S.TextWithPadding family="BOLD">
              {`${getDurationMinutes(service)}`}
            </S.TextWithPadding>
            <Text>min</Text>
          </>
        ) : null}
      </S.RowContainer>
    </S.RowContainer>
  </View>
);

ServiceInfo.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceInfo;
