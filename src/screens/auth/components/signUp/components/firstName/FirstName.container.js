import { withLabel } from '@@hocs';

import BaseFirstName from './FirstName';

const FirstName = withLabel('signUp.fields.firstName')(BaseFirstName);

export default FirstName;
