import { withUseState } from '@@hocs';

import BasePassword from './PasswordInput';

const PasswordInput = withUseState('passwordHidden', true)(BasePassword);

export default PasswordInput;
