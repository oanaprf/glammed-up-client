import { withLabel } from '@@hocs';

import BaseRating from './Rating';

const Rating = withLabel('review.fields.rating')(BaseRating);

export default Rating;
