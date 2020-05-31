import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';

import { Search, ServiceList, CategoryList } from './components';
import * as S from './styled';

const Services = ({ searchFocused, setSearchFocused }) => (
  <S.Container>
    <S.Header>
      <S.Title>{t('services.pageName')}</S.Title>
    </S.Header>
    <S.Body>
      <Search setSearchFocused={setSearchFocused} />
      {searchFocused ? <CategoryList /> : <ServiceList />}
    </S.Body>
  </S.Container>
);

Services.propTypes = {
  searchFocused: PropTypes.bool.isRequired,
  setSearchFocused: PropTypes.func.isRequired,
};

export default Services;
