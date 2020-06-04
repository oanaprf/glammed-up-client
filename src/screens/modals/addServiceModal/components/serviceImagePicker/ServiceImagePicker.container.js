import { withLabel } from '@@hocs';

import BaseServiceImagePicker from './ServiceImagePicker';

const ServiceImagePicker = withLabel('service.fields.pictures')(
  BaseServiceImagePicker
);

export default ServiceImagePicker;
