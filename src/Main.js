import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import { TabBar, SplashScreen } from '@@components';
import { Home, Appointments, Profile, Settings, Auth } from '@@screens';

const Tab = createBottomTabNavigator();

const Main = ({ translationsLoaded, isLoggedIn }) =>
  // eslint-disable-next-line no-nested-ternary
  translationsLoaded ? (
    isLoggedIn ? (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <NavigationContainer>
          <Tab.Navigator tabBar={TabBar} initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} icon="home" />
            <Tab.Screen
              name="Appointments"
              component={Appointments}
              icon="calendar"
            />
            <Tab.Screen name="Profile" component={Profile} icon="user" />
            <Tab.Screen name="Settings" component={Settings} icon="settings" />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    ) : (
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    )
  ) : (
    <SplashScreen />
  );

Main.propTypes = {
  translationsLoaded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Main;
