import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import { TextInput } from '@@components';

const SearchBar = ({ searchBy, onSearch }) => (
  <TextInput
    dark
    placeholder={t('search.search')}
    value={searchBy}
    onChangeText={onSearch}
    Icon={
      <Icon
        {...{
          name: 'search',
          type: 'feather',
          size: 20,
          color: theme.colors.grey,
        }}
      />
    }
  />
);

SearchBar.propTypes = {
  searchBy: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
