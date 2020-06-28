import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BasePrice from './Price';

const Price = compose(
  withLabel('service.fields.price'),
  withProps(({ formValues }) => ({
    value: formValues.price,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, price: value }),
  })
)(BasePrice);

export default Price;
