import React from 'react';

import { Dropdown } from '@@components';

const Category = props => (
  <Dropdown
    {...{
      dark: true,
      name: 'category',
      maxHeight: 250,
      ...props,
    }}
  />
);

export default Category;
