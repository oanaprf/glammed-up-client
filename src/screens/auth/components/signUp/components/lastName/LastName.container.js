import { withLabel } from '@@hocs';

import BaseLastName from './LastName';

const LastName = withLabel('signUp.fields.lastName')(BaseLastName);

export default LastName;
