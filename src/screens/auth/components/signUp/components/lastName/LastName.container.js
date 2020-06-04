import { withLabel } from '@@hocs';
import { t } from '@@config';

import BaseLastName from './LastName';

const LastName = withLabel(t('signUp.fields.lastName'))(BaseLastName);

export default LastName;
