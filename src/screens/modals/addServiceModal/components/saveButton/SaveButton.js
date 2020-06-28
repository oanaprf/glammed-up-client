import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import { Button, ButtonText } from '@@components';

const SaveButton = ({ onSave }) => (
  <Button rounded onPress={onSave}>
    <ButtonText>{t('common.save')}</ButtonText>
  </Button>
);

SaveButton.propTypes = {
  onSave: PropTypes.func.isRequired,
};

export default SaveButton;
