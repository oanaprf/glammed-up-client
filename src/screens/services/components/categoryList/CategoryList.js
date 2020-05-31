import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';
import Category from './category';

const CategoryList = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 5,
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <Category category="NAILS" />
      <Category category="HAIR" />
      <Category category="MAKE_UP" />
      <Category category="WAXING" />
      <Category category="EYELASHES" />
      <Category category="EYEBROWS" />
      <Category category="FACIALS" />
      <Category category="MASSAGE" />
      <Category category="OTHER" />
    </ScrollView>
  </>
);

export default CategoryList;
