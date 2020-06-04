import { withLabel } from '@@hocs';

import BaseDate from './Date';

const Date = withLabel('appointments.fields.date')(BaseDate);

export default Date;
