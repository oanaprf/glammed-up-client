import { withLabel } from '@@hocs';

import BaseTime from './Time';

const Time = withLabel('appointments.fields.time')(BaseTime);

export default Time;
