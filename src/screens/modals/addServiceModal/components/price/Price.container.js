import { withLabel } from '@@hocs';
import { t } from '@@config';

import BasePrice from './Price';

const Price = withLabel(t('service.fields.price'))(BasePrice);

export default Price;
