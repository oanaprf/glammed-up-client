import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import BaseSearchBar from './SearchBar';

const SearchBar = compose(
  connect(null, {
    search: services.actions.searchServices,
  }),
  withHandlers({
    onSearch: ({ selectedCategory, setSearchBy, search }) => value => {
      setSearchBy(value);
      search(value, selectedCategory);
    },
  })
)(BaseSearchBar);

export default SearchBar;
