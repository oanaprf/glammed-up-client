import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';
import { theme } from '@@config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.veryLightGrey,
  },
});

const mapStateToProps = state => ({
  services: fetch.selectors.getData('services', [])(state),
});

const mapDispatchToProps = dispatch => ({
  onPress: () =>
    dispatch(fetch.actions.fetch({ name: 'services', url: routes.services }, { method: 'GET' })),
});

const StyledText = styled.Text`
  text-transform: uppercase;
  font-size: 15;
  letter-spacing: 3;
  color: #000;
`;

const StyledTouchable = styled.TouchableOpacity`
  background-color: #fff;
  border-radius: 5;
  margin-bottom: 10;
  height: 40;
  justify-content: center;
  padding-right: 10;
  padding-left: 14;
`;

const Main = ({ services, onPress }) => (
  <View style={styles.container}>
    <StyledTouchable onPress={onPress}>
      <StyledText theme={theme}>login</StyledText>
    </StyledTouchable>
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.theme_pastel.secondary,
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 14,
      }}
    >
      <StyledText theme={theme}>login</StyledText>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: theme.colors.theme_pastel.ternary,
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 14,
      }}
    >
      <StyledText theme={theme}>login</StyledText>
    </TouchableOpacity>

    <Text>{services.length}</Text>
  </View>
);

Main.propTypes = {
  services: PropTypes.array,
  onPress: PropTypes.func.isRequired,
};

Main.defaultProps = {
  services: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
