import { withLabel } from '@@hocs';

import BaseName from './Name';

const Name = withLabel('service.fields.name')(BaseName);

export default Name;
