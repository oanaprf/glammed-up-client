import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import * as C from '@@utils/constants';
import { getFirstPicture } from '@@store/modules/services/selectors';
import { ServiceDetails as DefaultServiceDetails } from './components';
import * as S from './styled';

const Service = ({
  openModal,
  style,
  isUserService,
  ServiceDetails = DefaultServiceDetails,
  service,
}) => (
  <S.CardContainer style={style}>
    <TouchableOpacity
      onPress={() =>
        openModal({ name: C.MODALS.SERVICE_DETAILS, data: service })
      }
      activeOpacity={0.8}
    >
      <S.ServicePicture source={getFirstPicture(service)}>
        <S.StyledLinearGradient
          colors={['transparent', 'transparent', 'rgba(0,0,0,0.5)']}
        />
        <ServiceDetails isUserService={isUserService} service={service} />
      </S.ServicePicture>
    </TouchableOpacity>
  </S.CardContainer>
);

Service.propTypes = {
  openModal: PropTypes.func.isRequired,
  style: PropTypes.array,
  isUserService: PropTypes.bool,
  ServiceDetails: PropTypes.func,
  service: PropTypes.object.isRequired,
};

export default Service;
