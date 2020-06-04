import { withLabel } from '@@hocs';
import { t } from '@@config';

import BaseEmail from './Email';

const Email = withLabel(t('login.fields.email'))(BaseEmail);

export default Email;
