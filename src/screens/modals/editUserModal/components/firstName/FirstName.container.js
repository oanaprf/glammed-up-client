import { withLabel } from '@@hocs';

import BaseFirstName from './FirstName';

const FirstName = withLabel('profile.fields.firstName')(BaseFirstName);

export default FirstName;
