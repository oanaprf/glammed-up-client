import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetch } from '@@store/middlewares';
import { routes } from '@@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  services: fetch.selectors.getData('services', [])(state),
});

const mapDispatchToProps = dispatch => ({
  onPress: () =>
    dispatch(fetch.actions.fetch({ name: 'services', url: routes.services }, { method: 'GET' })),
});

const Main = ({ services, onPress }) => (
  <View style={styles.container}>
    <Button title="Get Services" onPress={onPress} />
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
