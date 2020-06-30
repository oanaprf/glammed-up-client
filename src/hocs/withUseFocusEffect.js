import React from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default func => Component => props => {
  useFocusEffect(
    React.useCallback(() => {
      func(props);
    }, [])
  );
  return (
    <Component
      {...{
        ...props,
      }}
    />
  );
};
