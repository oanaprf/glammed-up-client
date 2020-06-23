import { compose, withProps } from 'recompose';
import { withLabel } from '@@hocs';

import BaseService from './Service';

const mapServiceNamesToOptions = ({ _id, name }) => ({
  key: _id,
  value: name,
});

const Service = compose(
  withLabel('appointments.fields.service'),
  withProps(({ serviceNames }) => ({
    options: serviceNames.map(mapServiceNamesToOptions),
  }))
)(BaseService);

export default Service;
