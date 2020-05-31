import React from 'react';
import PropTypes from 'prop-types';

import User from './user';

const Users = ({ users }) => (
  <>
    {users.map(user => (
      <User key={user} user={user} />
    ))}
  </>
);

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

export default Users;
