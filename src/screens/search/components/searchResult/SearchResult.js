import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';
import { Service } from '@@screens/common';

import { User } from './components';

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
      {users && users.map(user => <User key={user._id} user={user} />)}
      {services &&
        services.map(service => (
          <Service key={service._id} service={service} />
        ))}
    </ScrollView>
  </>
);

SearchResult.propTypes = {
  users: PropTypes.array.isRequired,
  services: PropTypes.array.isRequired,
};

export default SearchResult;
