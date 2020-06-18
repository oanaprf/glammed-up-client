import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import { ServiceInfo } from '@@screens/common';

import { ProviderInfo } from './components';

const ServiceDetails = ({ service = {} }) => (
  <View>
    <ServiceInfo service={service} />
    <Spacer height={15} />
    <ProviderInfo provider={service.provider} />
    <Spacer height={15} />
  </View>
);
ServiceDetails.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceDetails;
