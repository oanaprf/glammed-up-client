import { compose, withProps, withHandlers } from 'recompose';
import { withLabel } from '@@hocs';

import BaseService from './Service';

const mapServiceNamesToOptions = ({ _id, name }) => ({
  key: _id,
  value: name,
});

const Service = compose(
  withLabel('appointments.fields.service'),
  withProps(({ serviceNames, formValues }) => ({
    options: serviceNames.map(mapServiceNamesToOptions),
    value: formValues.serviceId,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, serviceId: value }),
  })
)(BaseService);

export default Service;
