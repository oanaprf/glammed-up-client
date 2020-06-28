import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from '@@components';

const Category = props => (
  <Dropdown
    {...{
      dark: true,
      name: 'category',
      maxHeight: 250,
      error: props.submitting && !props.value,
      ...props,
    }}
  />
);

Category.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Category;
