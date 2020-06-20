import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { ServiceDetailsModal } from '@@screens/modals';
import { ButtonText } from '@@components';

import {
  SearchBar,
  Categories,
  SearchResult,
  SelectedCategory,
} from './components';
import * as S from './styled';

const Search = ({
  searchBy,
  setSearchBy,
  selectedCategory,
  setSelectedCategory,
}) => (
  <S.Container>
    <S.Header>
      <ButtonText size="XL" family="REGULAR">
        {t('search.pageName')}
      </ButtonText>
    </S.Header>
    <S.Body>
      <S.SearchBarContainer>
        <SearchBar {...{ searchBy, setSearchBy, selectedCategory }} />
      </S.SearchBarContainer>
      {selectedCategory ? (
        <SelectedCategory
          {...{ selectedCategory, setSelectedCategory, searchBy }}
        />
      ) : null}
      {searchBy || selectedCategory ? (
        <SearchResult />
      ) : (
        <Categories setSelectedCategory={setSelectedCategory} />
      )}
    </S.Body>
    <ServiceDetailsModal />
  </S.Container>
);

Search.propTypes = {
  searchBy: PropTypes.string.isRequired,
  setSearchBy: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Search;
