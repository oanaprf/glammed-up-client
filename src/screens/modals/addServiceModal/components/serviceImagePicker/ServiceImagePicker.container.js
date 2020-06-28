import { compose, withHandlers } from 'recompose';
import { withLabel } from '@@hocs';

import BaseServiceImagePicker from './ServiceImagePicker';

const ServiceImagePicker = compose(
  withLabel('service.fields.pictures'),
  withHandlers({
    onSelectImage: ({ formValues, setFormValues }) => uri =>
      setFormValues({ ...formValues, pictures: [...formValues.pictures, uri] }),
  })
)(BaseServiceImagePicker);

export default ServiceImagePicker;
