/* eslint-disable react/jsx-key */
import React from 'react';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { SaveButton } from './components';
import * as S from './styled';

const ChangeLanguageModal = () => (
  <Modal
    name={C.MODALS.CHANGE_LANGUAGE_MODAL}
    style={{ width: '80%' }}
    title={t('settings.changeLanguage')}
  >
    <S.ModalContainer>
      <S.JustifiedText>{t('settings.changeLanguageIntro')}</S.JustifiedText>
      <Spacer height={5} />
      <S.StyleRadioGroup
        options={[
          <S.PaddedText family="BOLD" uppercase>
            {t('settings.ro')}
          </S.PaddedText>,
          <S.PaddedText family="BOLD" uppercase>
            {t('settings.en')}
          </S.PaddedText>,
        ]}
      />
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default ChangeLanguageModal;
