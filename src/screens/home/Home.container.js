import { compose } from 'recompose';
import { connect } from 'react-redux';

import { withOnMount } from '@@hocs';
import { services } from '@@store/modules';

import BaseHome from './Home';

const Home = compose(
  connect(null, {
    fetchServices: services.actions.fetchServices,
    fetchMostPopularServices: services.actions.fetchMostPopularServices,
  }),
  withOnMount(({ fetchServices, fetchMostPopularServices }) => {
    fetchServices();
    fetchMostPopularServices();
  })
)(BaseHome);

export default Home;
