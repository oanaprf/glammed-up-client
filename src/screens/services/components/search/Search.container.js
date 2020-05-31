import { withHandlers } from 'recompose';

import BaseSearch from './Search';

const Search = withHandlers({
  onFocus: ({ setSearchFocused }) => () => setSearchFocused(true),
  onBlur: ({ setSearchFocused }) => () => setSearchFocused(false),
})(BaseSearch);

export default Search;
