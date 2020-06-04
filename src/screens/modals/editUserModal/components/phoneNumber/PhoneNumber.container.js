import { withLabel } from '@@hocs';

import BasePhoneNumber from './PhoneNumber';

const PhoneNumber = withLabel('profile.fields.phoneNumber')(BasePhoneNumber);

export default PhoneNumber;
