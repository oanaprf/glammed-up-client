import { withLabel } from '@@hocs';

import BaseClient from './Client';

const Client = withLabel('appointments.fields.client')(BaseClient);

export default Client;
