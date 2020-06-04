import { withLabel } from '@@hocs';

import BaseComment from './Comment';

const Comment = withLabel('review.fields.comment')(BaseComment);

export default Comment;
