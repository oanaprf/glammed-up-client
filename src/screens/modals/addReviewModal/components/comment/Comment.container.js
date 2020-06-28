import { compose, withProps, withHandlers } from 'recompose';

import { withLabel } from '@@hocs';

import BaseComment from './Comment';

const Comment = compose(
  withLabel('review.fields.comment'),
  withProps(({ formValues }) => ({
    value: formValues.comment,
  })),
  withHandlers({
    onChangeText: ({ formValues, setFormValues }) => value =>
      setFormValues({ ...formValues, comment: value }),
  })
)(BaseComment);

export default Comment;
