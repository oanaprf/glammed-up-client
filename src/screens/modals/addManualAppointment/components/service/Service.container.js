import { withLabel } from '@@hocs';

import BaseService from './Service';

const Service = withLabel('appointments.fields.service')(BaseService);

export default Service;
