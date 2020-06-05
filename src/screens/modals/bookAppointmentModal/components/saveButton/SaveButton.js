import React from 'react';

import { t } from '@@config';
import { Button, ButtonText } from '@@components';

const SaveButton = () => (
  <Button rounded>
    <ButtonText>{t('common.save')}</ButtonText>
  </Button>
);

export default SaveButton;
