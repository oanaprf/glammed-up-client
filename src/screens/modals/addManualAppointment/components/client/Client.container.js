import { compose, withProps, withHandlers } from 'recompose';
import { withLabel } from '@@hocs';

import BaseClient from './Client';

const mapClientNamesToOptions = ({ _id, fullName }) => ({
  key: _id,
  value: fullName,
});

const Client = compose(
  withLabel('appointments.fields.client'),
  withProps(({ clientNames, formValues }) => ({
    options: clientNames.map(mapClientNamesToOptions),
    value: formValues.clientId,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, clientId: value }),
  })
)(BaseClient);

export default Client;
