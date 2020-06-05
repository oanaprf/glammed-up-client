import React from 'react';
import { Icon } from 'react-native-elements';

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
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-checked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          {t('settings.ro')}
        </S.PaddedText>
      </S.RowContainer>
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-unchecked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          {t('settings.en')}
        </S.PaddedText>
      </S.RowContainer>
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default ChangeLanguageModal;
