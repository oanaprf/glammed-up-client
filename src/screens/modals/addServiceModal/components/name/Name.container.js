import { withLabel } from '@@hocs';
import { t } from '@@config';

import BaseName from './Name';

const Name = withLabel(t('service.fields.name'))(BaseName);

export default Name;
