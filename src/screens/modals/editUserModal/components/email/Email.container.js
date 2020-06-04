import { withLabel } from '@@hocs';

import BaseEmail from './Email';

const Email = withLabel('profile.fields.email')(BaseEmail);

export default Email;
