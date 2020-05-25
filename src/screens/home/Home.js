import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Text,
  Card,
  Spacer,
  Dropdown,
  NumberSpinner,
  Rating,
  Button,
  TextInput,
  Modal,
} from '@@components';
import { t } from '@@config';
import { modal } from '@@store/modules';

const Home = ({ openModal }) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Card
        style={{
          height: 500,
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{t('home.pageName')}</Text>
        <Spacer />
        <Button rounded>
          <Text style={{ color: 'white' }}>Press me</Text>
        </Button>
        <Spacer />
        <TextInput placeholder="Test" rounded style={{ width: '80%' }} />
        <Spacer />
        <Dropdown
          options={['NAILS', 'MAKE_UP', 'WAXING']}
          style={{ width: '80%', zIndex: 1 }}
          dark
          rounded
          placeholder="Category"
        />
        <Spacer />
        <NumberSpinner rounded dark />
        <Spacer />
        <Rating />
        <Button onPress={() => openModal({ name: 'test' })}>
          <Text>OPen</Text>
        </Button>
        <Modal
          name="test"
          style={{ height: '80%', width: '90%' }}
          title="Make an appointment"
        >
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              {...{
                dark: true,
                placeholder: t('login.fields.email'),
                name: 'email',
              }}
            />
          </View>
        </Modal>
      </Card>
    </TouchableWithoutFeedback>
  </View>
);

Home.propTypes = {
  openModal: PropTypes.func,
};

export default connect(null, {
  openModal: modal.actions.openModal,
})(Home);
