import React from 'react';
import { ScrollView } from 'react-native';

import { Spacer } from '@@components';
import Service from './service';

const UserServices = () => (
  <>
    <Spacer height={10} />
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <Service />
      <Service />
      <Service />
      <Service />
    </ScrollView>
  </>
);

export default UserServices;
