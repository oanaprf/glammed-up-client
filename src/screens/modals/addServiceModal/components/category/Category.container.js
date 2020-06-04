import { compose, withProps } from 'recompose';

import { withLabel } from '@@hocs';
import { t } from '@@config';
import * as C from '@@utils/constants';

import BaseCategory from './Category';

const options = Object.values(C.CATEGORIES).map(category => ({
  key: category,
  value: t(`search.categories.${category}`),
}));

const Category = compose(
  withProps({
    options,
  }),
  withLabel(t('service.fields.category'))
)(BaseCategory);

export default Category;
