import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { Text } from '@@components';
import { theme } from '@@config';
import {
  getRating,
  getProviderFullName,
  getServiceName,
} from '@@store/modules/reviews/selectors';

import * as S from './styled';

const ServiceInfo = ({ review = {} }) => (
  <S.InfoContainer>
    <S.ServiceInfoContainer>
      <S.TextWithPadding family="BOLD" numberOfLines={1}>
        {getServiceName(review)}
      </S.TextWithPadding>
      <Text>{getProviderFullName(review)}</Text>
    </S.ServiceInfoContainer>
    <S.RatingContainer>
      <S.TextWithPadding family="BOLD">{`${getRating(
        review
      )}`}</S.TextWithPadding>
      <Icon
        {...{
          name: 'star',
          type: 'antdesign',
          size: 18,
          color: theme.colors.warning,
        }}
      />
    </S.RatingContainer>
  </S.InfoContainer>
);

ServiceInfo.propTypes = {
  review: PropTypes.object.isRequired,
};

export default ServiceInfo;
