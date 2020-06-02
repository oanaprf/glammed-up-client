import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { ServiceDetailsModal } from '@@screens/modals';

import { SearchBar, Categories, SearchResult } from './components';
import * as S from './styled';

const Search = ({ isSearching, users, services }) => (
  <S.Container>
    <S.Header>
      <S.Title>{t('search.pageName')}</S.Title>
    </S.Header>
    <S.Body>
      <S.SearchBarContainer>
        <SearchBar />
      </S.SearchBarContainer>
      {isSearching ? <SearchResult {...{ users, services }} /> : <Categories />}
    </S.Body>
    <ServiceDetailsModal />
  </S.Container>
);

Search.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  services: PropTypes.array.isRequired,
};

export default Search;
