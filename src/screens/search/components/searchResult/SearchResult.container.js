import { branch, renderComponent } from 'recompose';

import { NoResults } from '@@components';

import BaseSearchResult from './SearchResult';

const SearchResult = branch(
  ({ users, services }) => !users.length && !services.length,
  renderComponent(NoResults)
)(BaseSearchResult);

export default SearchResult;
