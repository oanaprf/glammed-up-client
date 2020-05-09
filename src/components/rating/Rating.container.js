import { withUseState } from '@@hocs';

import BaseRating from './Rating';

const Rating = withUseState('rating', 0)(BaseRating);

export default Rating;
