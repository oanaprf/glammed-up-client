import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseRating from './Rating';

const Rating = compose(
  withLabel('review.fields.rating'),
  withProps(({ formValues }) => ({
    rating: formValues.rating,
  })),
  withHandlers({
    onChange: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, rating: value }),
  })
)(BaseRating);

export default Rating;
