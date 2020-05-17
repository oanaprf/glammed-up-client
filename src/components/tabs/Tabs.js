import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import * as S from './styled';

const Tabs = ({
  tabLabels,
  tabContents,
  selectedTab,
  setSelectedTab,
  ...rest
}) => (
  <View {...rest}>
    <S.TabHeader>
      {tabLabels.map((label, index) => (
        <S.TabLabel
          key={index}
          isTabSelected={selectedTab === index}
          onPress={() => setSelectedTab(index)}
        >
          {label}
        </S.TabLabel>
      ))}
    </S.TabHeader>
    <>
      {tabContents.map((content, index) => (
        <S.TabContent key={index} isTabSelected={selectedTab === index}>
          {content}
        </S.TabContent>
      ))}
    </>
  </View>
);

Tabs.propTypes = {
  tabLabels: PropTypes.array.isRequired,
  tabContents: PropTypes.array.isRequired,
  selectedTab: PropTypes.number.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default Tabs;
