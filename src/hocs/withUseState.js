import React, { useState } from 'react';
import upperFirst from 'lodash/fp/upperFirst';

export default (stateName, defaultValue) => Component => props => {
  const [state, setState] =
    typeof defaultValue === 'function'
      ? useState(defaultValue(props))
      : useState(defaultValue);
  return (
    <Component
      {...{
        ...props,
        [stateName]: state,
        [`set${upperFirst(stateName)}`]: setState,
      }}
    />
  );
};
