import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import TabItem from './tabItem';

const TabBar = ({
  state: { routes, index: activeIndex },
  navigation: { emit, navigate },
}) => (
  <S.TabBar>
    {routes.map((route, index) => (
      <TabItem
        key={index}
        {...{
          route,
          emit,
          navigate,
          isActive: activeIndex === index,
        }}
      />
    ))}
  </S.TabBar>
);

TabBar.propTypes = {
  state: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default TabBar;
