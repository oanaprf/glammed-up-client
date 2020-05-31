import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import { Services } from '@@screens/common';

import { Users } from './components';

const SearchResult = ({ users, services }) => (
  <>
    <Spacer height={10} />
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}
    >
      {users && <Users users={users} />}
      {services && <Services services={services} />}
    </ScrollView>
  </>
);

SearchResult.propTypes = {
  users: PropTypes.array.isRequired,
  services: PropTypes.array.isRequired,
};

export default SearchResult;
