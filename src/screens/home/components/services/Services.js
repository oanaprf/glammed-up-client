import React from 'react';
import PropTypes from 'prop-types';

import { Service } from '@@screens/common';
import { Spacer, Text } from '@@components';
import { t } from '@@config';

const Services = ({ services = [] }) => (
  <>
    <Text size="M" family="BOLD">
      {t('home.allServices')}
    </Text>
    <Spacer height={5} />
    {services.map(service => (
      <Service key={service._id} service={service} />
    ))}
  </>
);

Services.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Services;
