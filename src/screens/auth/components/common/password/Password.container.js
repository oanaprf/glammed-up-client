import { withLabel } from '@@hocs';
import { t } from '@@config';

import BasePassword from './Password';

const Password = withLabel(t('login.fields.password'))(BasePassword);

export default Password;
