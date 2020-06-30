import React from 'react';
import PropTypes from 'prop-types';

import { Service } from '@@screens/common';

const Services = ({ services = [] }) => (
  <>
    {services.map(service => (
      <Service key={service._id} service={service} />
    ))}
  </>
);

Services.propTypes = {
  services: PropTypes.array.isRequired,
};

export default Services;
