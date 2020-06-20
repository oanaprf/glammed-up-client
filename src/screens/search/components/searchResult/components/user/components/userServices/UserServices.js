import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import * as S from './styled';

const User = ({ services }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingVertical: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    {services.map(service => (
      <S.StyledService key={service._id} isUserService service={service} />
    ))}
  </ScrollView>
);

User.propTypes = {
  services: PropTypes.array.isRequired,
};

export default User;
