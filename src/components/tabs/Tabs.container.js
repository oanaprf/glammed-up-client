import { withUseState } from '@@hocs';

import BaseTabs from './Tabs';

const Tabs = withUseState('selectedTab', 0)(BaseTabs);

export default Tabs;
