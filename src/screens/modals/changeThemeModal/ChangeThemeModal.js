/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { SaveButton, Option } from './components';
import * as S from './styled';

const ChangeThemeModal = ({ selectedOption, selectedTheme, onChange }) => (
  <Modal
    name={C.MODALS.CHANGE_THEME_MODAL}
    style={{ width: '80%' }}
    title={t('settings.changeTheme')}
  >
    <S.ModalContainer>
      <S.JustifiedText>{t('settings.changeThemeIntro')}</S.JustifiedText>
      <Spacer height={5} />
      <S.StyleRadioGroup
        options={[
          { value: 'PURPLE', Component: <Option value="PURPLE" /> },
          { value: 'FUCHSIA', Component: <Option value="FUCHSIA" /> },
          { value: 'FIRE', Component: <Option value="FIRE" /> },
          { value: 'ORANGE', Component: <Option value="ORANGE" /> },
          { value: 'AQUA', Component: <Option value="AQUA" /> },
          { value: 'BLUE', Component: <Option value="BLUE" /> },
        ]}
        {...{ selectedOption, onChange }}
      />
      <Spacer height={10} />
      <SaveButton selectedTheme={selectedTheme} />
    </S.ModalContainer>
  </Modal>
);

ChangeThemeModal.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  selectedTheme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChangeThemeModal;
