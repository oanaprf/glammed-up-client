import { withProps } from 'recompose';

import BaseSearch from './Search';

const Search = withProps({
  isSearching: true,
  users: [1, 2],
  services: [1],
})(BaseSearch);

export default Search;
