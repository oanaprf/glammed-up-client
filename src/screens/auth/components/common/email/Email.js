import React from 'react';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { TextInput } from '@@components';
import { theme } from '@@config';

const Email = props => (
  <TextInput
    {...{
      dark: true,
      name: 'email',
      error: props.submitting && !props.value,
      ...props,
    }}
    Icon={
      <Icon
        {...{
          name: 'mail',
          type: 'feather',
          size: 20,
          color: theme.colors.grey,
        }}
      />
    }
  />
);

Email.propTypes = {
  value: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default Email;
