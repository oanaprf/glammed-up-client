import React from 'react';

import { Dropdown } from '@@components';

const Category = props => (
  <Dropdown
    {...{
      dark: true,
      name: 'category',
      ...props,
    }}
  />
);

export default Category;
