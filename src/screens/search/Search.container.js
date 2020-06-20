import { compose } from 'recompose';

import { withUseState } from '@@hocs';
import BaseSearch from './Search';

const Search = compose(
  withUseState('searchBy', ''),
  withUseState('selectedCategory', '')
)(BaseSearch);

export default Search;
