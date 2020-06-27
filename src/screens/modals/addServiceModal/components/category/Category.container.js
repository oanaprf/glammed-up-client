import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';
import { t } from '@@config';
import * as C from '@@utils/constants';

import BaseCategory from './Category';

const Category = compose(
  withProps(({ formValues }) => ({
    options: Object.values(C.CATEGORIES).map(category => ({
      key: category,
      value: t(`search.categories.${category}`),
    })),
    value: formValues.category,
  })),
  withLabel('service.fields.category'),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, category: value }),
  })
)(BaseCategory);

export default Category;
