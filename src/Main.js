import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';

import { TabBar, SplashScreen } from '@@components';
import { Home, Search, Appointments, Profile, Settings, Auth } from '@@screens';
import { theme } from '@@config';

const HomeStackNavigator = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <HomeStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}
    initialRouteName="Home"
  >
    <HomeStackNavigator.Screen name="Home" component={Home} />
    <HomeStackNavigator.Screen name="Settings" component={Settings} />
  </HomeStackNavigator.Navigator>
);

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
              <Tab.Navigator tabBar={TabBar} initialRouteName="Home">
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Appointments" component={Appointments} />
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
