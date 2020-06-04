import { withLabel } from '@@hocs';
import { t } from '@@config';

import BaseFirstName from './FirstName';

const FirstName = withLabel(t('signUp.fields.firstName'))(BaseFirstName);

export default FirstName;
