import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import { TabBar, SplashScreen } from '@@components';
import {
  Home,
  Services,
  Appointments,
  Profile,
  Settings,
  Auth,
} from '@@screens';
import { theme } from '@@config';

const Tab = createBottomTabNavigator();

const Main = ({ translationsLoaded, isLoggedIn }) => (
  <>
    <SafeAreaView style={{ flex: 0, backgroundColor: theme.colors.black }} />
    <StatusBar barStyle="light-content" />
    {
      // eslint-disable-next-line no-nested-ternary
      translationsLoaded ? (
        isLoggedIn ? (
          <SafeAreaView
            style={{ flex: 1, backgroundColor: theme.colors.white }}
          >
            <NavigationContainer>
              <Tab.Navigator tabBar={TabBar} initialRouteName="Services">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Services" component={Services} />
                <Tab.Screen name="Appointments" component={Appointments} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Settings" component={Settings} />
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
      )
    }
  </>
);

Main.propTypes = {
  translationsLoaded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Main;
