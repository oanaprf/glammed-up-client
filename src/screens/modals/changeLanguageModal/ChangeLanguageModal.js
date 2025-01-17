/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { SaveButton } from './components';
import * as S from './styled';

const ChangeLanguageModal = ({
  selectedOption,
  selectedLanguage,
  onChange,
  onCloseModal,
}) => (
  <Modal
    name={C.MODALS.CHANGE_LANGUAGE_MODAL}
    style={{ width: '80%' }}
    title={t('settings.changeLanguage')}
    onCloseModal={onCloseModal}
  >
    <S.ModalContainer>
      <S.JustifiedText>{t('settings.changeLanguageIntro')}</S.JustifiedText>
      <Spacer height={5} />
      <S.StyleRadioGroup
        options={[
          {
            value: 'ro',
            Component: (
              <S.PaddedText family="BOLD" uppercase>
                {t('settings.ro')}
              </S.PaddedText>
            ),
          },
          {
            value: 'en',
            Component: (
              <S.PaddedText family="BOLD" uppercase>
                {t('settings.en')}
              </S.PaddedText>
            ),
          },
        ]}
        {...{ selectedOption, onChange }}
      />
      <Spacer height={10} />
      <SaveButton selectedLanguage={selectedLanguage} />
    </S.ModalContainer>
  </Modal>
);

ChangeLanguageModal.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default ChangeLanguageModal;
