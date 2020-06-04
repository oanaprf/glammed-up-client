import { withLabel } from '@@hocs';

import BaseDuration from './Duration';

const Duration = withLabel('service.fields.duration')(BaseDuration);

export default Duration;
