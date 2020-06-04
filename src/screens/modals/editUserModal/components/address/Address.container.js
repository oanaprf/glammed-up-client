import { withLabel } from '@@hocs';

import BaseAddress from './Address';

const Address = withLabel('profile.fields.address')(BaseAddress);

export default Address;
