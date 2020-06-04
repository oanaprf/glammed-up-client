import { withLabel } from '@@hocs';

import BaseEmail from './Email';

const Email = withLabel('login.fields.email')(BaseEmail);

export default Email;
