import { connect } from 'react-redux';

import { fetch, auth } from '@@store/middlewares';

import BaseToast from './Toast';

const Toast = connect(state => ({
  error: fetch.selectors.getError(state) || auth.selectors.getError(state),
}))(BaseToast);

export default Toast;
