import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { user } from '@@store/modules';
import { withOpenModal } from '@@hocs';

import BaseSettings from './Settings';

const Settings = compose(
  connect(
    state => ({
      isCurrentUserProvider: user.selectors.isCurrentUserProvider(state),
    }),
    {
      logout: user.actions.logout,
    }
  ),
  withOpenModal,
  withHandlers({
    onLogout: ({ logout }) => () => logout(),
  })
)(BaseSettings);

export default Settings;
