import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { U } from '@@utils';
import * as S from './styled';

const User = ({ user = {} }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingVertical: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    {user.services.map(service => (
      <S.StyledService
        key={service._id}
        isUserService
        service={{
          ...service,
          providerId: user._id,
          provider: U.pickProviderDetails(user),
        }}
      />
    ))}
  </ScrollView>
);

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
