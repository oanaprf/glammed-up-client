/* eslint-disable camelcase */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import * as C from '@@utils/constants';
import { TabBar, SplashScreen } from '@@components';
import { Home, Search, Appointments, Profile, Settings, Auth } from '@@screens';
import {
  theme,
  themeFuchsia,
  themePurple,
  themeAqua,
  themeBlue,
  themeFire,
  themeLila,
} from '@@config';

const themeMapping = {
  [C.THEME_COLORS.FUCHSIA]: themeFuchsia,
  [C.THEME_COLORS.PURPLE]: themePurple,
  [C.THEME_COLORS.AQUA]: themeAqua,
  [C.THEME_COLORS.BLUE]: themeBlue,
  [C.THEME_COLORS.FIRE]: themeFire,
  [C.THEME_COLORS.LILA]: themeLila,
};

const HomeStackNavigator = createStackNavigator();
const SearchStackNavigator = createStackNavigator();
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

const SearchStack = () => (
  <SearchStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: false,
    }}
    initialRouteName="Search"
  >
    <SearchStackNavigator.Screen name="Search" component={Search} />
    <SearchStackNavigator.Screen name="Profile" component={Profile} />
  </SearchStackNavigator.Navigator>
);

const Main = ({ translationsLoaded, isLoggedIn, themeName }) => (
  <ThemeProvider
    theme={{
      ...theme,
      ...themeMapping[themeName],
    }}
  >
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
                <Tab.Screen name="Search" component={SearchStack} />
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
  </ThemeProvider>
);

Main.propTypes = {
  translationsLoaded: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default Main;
