import { withLabel } from '@@hocs';

import BaseLastName from './LastName';

const LastName = withLabel('profile.fields.lastName')(BaseLastName);

export default LastName;
