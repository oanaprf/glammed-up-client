/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { SaveButton, Option } from './components';
import * as S from './styled';

const ChangeThemeModal = ({
  selectedOption,
  selectedTheme,
  onChange,
  onCloseModal,
}) => (
  <Modal
    name={C.MODALS.CHANGE_THEME_MODAL}
    style={{ width: '80%' }}
    title={t('settings.changeTheme')}
    onCloseModal={onCloseModal}
  >
    <S.ModalContainer>
      <S.JustifiedText>{t('settings.changeThemeIntro')}</S.JustifiedText>
      <Spacer height={5} />
      <S.StyleRadioGroup
        options={[
          {
            value: C.THEME_COLORS.FIRE,
            Component: <Option value={C.THEME_COLORS.FIRE} />,
          },
          {
            value: C.THEME_COLORS.FUCHSIA,
            Component: <Option value={C.THEME_COLORS.FUCHSIA} />,
          },
          {
            value: C.THEME_COLORS.PURPLE,
            Component: <Option value={C.THEME_COLORS.PURPLE} />,
          },
          {
            value: C.THEME_COLORS.LILA,
            Component: <Option value={C.THEME_COLORS.LILA} />,
          },
          {
            value: C.THEME_COLORS.BLUE,
            Component: <Option value={C.THEME_COLORS.BLUE} />,
          },
          {
            value: C.THEME_COLORS.AQUA,
            Component: <Option value={C.THEME_COLORS.AQUA} />,
          },
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
  onCloseModal: PropTypes.func.isRequired,
};

export default ChangeThemeModal;
