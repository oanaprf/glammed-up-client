import { withLabel } from '@@hocs';
import { t } from '@@config';

import BaseDuration from './Duration';

const Duration = withLabel(t('service.fields.duration'))(BaseDuration);

export default Duration;
