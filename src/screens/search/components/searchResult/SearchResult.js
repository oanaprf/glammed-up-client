import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import { Service } from '@@screens/common';

import { Users } from './components';

const SearchResult = ({ users, services }) => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      {users && <Users users={users} />}
      {services && [0, 1, 2].map(v => <Service key={v} />)}
    </ScrollView>
  </>
);

SearchResult.propTypes = {
  users: PropTypes.array.isRequired,
  services: PropTypes.array.isRequired,
};

export default SearchResult;