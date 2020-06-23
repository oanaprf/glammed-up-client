import { compose, withProps } from 'recompose';
import { withLabel } from '@@hocs';

import BaseClient from './Client';

const mapClientNamesToOptions = ({ _id, fullName }) => ({
  key: _id,
  value: fullName,
});

const Client = compose(
  withLabel('appointments.fields.client'),
  withProps(({ clientNames }) => ({
    options: clientNames.map(mapClientNamesToOptions),
  }))
)(BaseClient);

export default Client;
