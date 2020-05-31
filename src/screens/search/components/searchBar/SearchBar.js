import React from 'react';
import { Icon } from 'react-native-elements';

import { t, theme } from '@@config';
import { TextInput } from '@@components';

const SearchBar = () => (
  <TextInput
    dark
    placeholder={t('search.search')}
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

export default SearchBar;
