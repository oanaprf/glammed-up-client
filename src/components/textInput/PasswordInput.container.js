import { withUseState } from '@@hocs';

import PasswordInput from './PasswordInput';

const PasswordInputContainer = withUseState(
  'passwordHidden',
  true
)(PasswordInput);

export default PasswordInputContainer;
