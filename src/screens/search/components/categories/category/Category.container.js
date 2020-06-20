import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { services } from '@@store/modules';
import BaseCategory from './Category';

const Category = compose(
  connect(null, {
    search: services.actions.searchServices,
  }),
  withHandlers({
    onSelectCategory: ({ category, setSelectedCategory, search }) => () => {
      setSelectedCategory(category);
      search(null, category);
    },
  })
)(BaseCategory);

export default Category;
