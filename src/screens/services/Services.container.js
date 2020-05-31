import { withUseState } from '@@hocs';

import BaseServices from './Services';

const Services = withUseState('searchFocused', false)(BaseServices);

export default Services;
