import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import * as C from '@@utils/constants';
import Category from './category';

const categories = Object.values(C.CATEGORIES);

const Categories = ({ setSelectedCategory }) => (
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
        <Category
          key={category}
          category={category}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </ScrollView>
  </>
);

Categories.propTypes = {
  setSelectedCategory: PropTypes.func.isRequired,
};

export default Categories;
