import React from 'react';
import PropTypes from 'prop-types';

import { U } from '@@utils';
import * as S from './styled';

const Services = ({ user, services }) => (
  <>
    {services.map(service => (
      <S.StyledService
        key={service._id}
        isUserService
        service={{
          ...service,
          providerId: user._id,
          provider: U.pickProviderDetails(user),
        }}
      />
    ))}
  </>
);

Services.propTypes = {
  services: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default Services;
