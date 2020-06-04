import { withLabel } from '@@hocs';

import BasePrice from './Price';

const Price = withLabel('service.fields.price')(BasePrice);

export default Price;
