import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';
import * as C from '@@utils/constants';
import Category from './category';

const categories = Object.values(C.CATEGORIES);

const Categories = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {categories.map(category => (
        <Category key={category} category={category} />
      ))}
    </ScrollView>
  </>
);

export default Categories;
