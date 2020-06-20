import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';

import BaseSelectedCategory from './SelectedCategory';

const SelectedCategory = compose(
  connect(null, {
    search: services.actions.searchServices,
  }),
  withHandlers({
    onDeleteCategory: ({ setSelectedCategory, searchBy, search }) => () => {
      setSelectedCategory('');
      searchBy && search(searchBy);
    },
  })
)(BaseSelectedCategory);

export default SelectedCategory;
