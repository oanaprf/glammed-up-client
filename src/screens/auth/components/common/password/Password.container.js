import { withLabel } from '@@hocs';

import BasePassword from './Password';

const Password = withLabel('login.fields.password')(BasePassword);

export default Password;
