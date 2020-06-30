import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { Notifications } from 'expo';

import { withOnMount, withUseFocusEffect } from '@@hocs';
import { services, modal } from '@@store/modules';
import * as C from '@@utils/constants';

import BaseHome from './Home';

const Home = compose(
  connect(null, {
    fetchServices: services.actions.fetchServices,
    fetchMostPopularServices: services.actions.fetchMostPopularServices,
    openModal: modal.actions.openModal,
  }),
  withHandlers({
    onNotificationReceived: ({ openModal }) => ({ data }) =>
      openModal({ name: C.MODALS.APPROVE_APPOINTMENT_MODAL, data }),
  }),
  withOnMount(({ onNotificationReceived }) => {
    Notifications.addListener(onNotificationReceived);
  }),
  withUseFocusEffect(({ fetchServices, fetchMostPopularServices }) => {
    fetchServices();
    fetchMostPopularServices();
  })
)(BaseHome);

export default Home;
