import React, { useEffect } from 'react';

export default funcToExecute => Component => props => {
  useEffect(() => {
    funcToExecute(props);
  }, []);
  return <Component {...props} />;
};
