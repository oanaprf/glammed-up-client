import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { ServiceDetailsModal } from '@@screens/modals';
import { ButtonText } from '@@components';

import { SearchBar, Categories, SearchResult } from './components';
import * as S from './styled';

const Search = ({ isSearching, users, services }) => (
  <S.Container>
    <S.Header>
      <ButtonText size="XL" family="REGULAR">
        {t('search.pageName')}
      </ButtonText>
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