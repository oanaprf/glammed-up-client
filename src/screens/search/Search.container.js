import { compose, withContext } from 'recompose';
import PropTypes from 'prop-types';

import { withUseState } from '@@hocs';
import BaseSearch from './Search';

const Search = compose(
  withUseState('searchBy', ''),
  withUseState('selectedCategory', ''),
  withContext(
    {
      navigation: PropTypes.object,
    },
    ({ navigation }) => ({ navigation })
  )
)(BaseSearch);

export default Search;
