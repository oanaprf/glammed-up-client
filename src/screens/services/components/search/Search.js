import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { t, theme } from '@@config';
import { TextInput } from '@@components';

const Search = ({ onFocus, onBlur }) => (
  <TextInput
    dark
    placeholder={t('services.search')}
    onFocus={onFocus}
    onBlur={onBlur}
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

Search.propTypes = {
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Search;
