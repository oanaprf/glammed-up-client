import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { NoResults, BigLoaderIcon } from '@@components';
import { services } from '@@store/modules';

import BaseSearchResult from './SearchResult';
import * as S from './styled';

const SearchResult = compose(
  connect(state => ({
    services: services.selectors.getSearchedServices(state),
    users: services.selectors.getSearchedUsers(state),
    isLoading: services.selectors.isSearchLoading(state),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.StyledView, BigLoaderIcon)),
    branch(
      // eslint-disable-next-line no-shadow
      ({ users, services }) => !users.length && !services.length,
      renderComponent(NoResults)
    )
  )
)(BaseSearchResult);

export default SearchResult;
