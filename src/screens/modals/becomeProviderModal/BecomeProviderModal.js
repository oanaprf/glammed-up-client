import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import {
  Modal,
  ButtonText,
  Text,
  Spacer,
  SecondaryColorIcon,
} from '@@components';
import * as C from '@@utils/constants';
import { t } from '@@config';

import * as S from './styled';

const BecomeProviderModal = ({ onPressYes, onPressNo }) => (
  <Modal name={C.MODALS.BECOME_PROVIDER} style={{ width: '90%' }}>
    <S.ModalContainer>
      <S.WandContainer>
        <SecondaryColorIcon
          {...{
            name: 'magic-wand',
            type: 'simple-line-icon',
            size: 40,
          }}
        />
      </S.WandContainer>
      <Spacer height={20} />
      <S.JustifiedText>{t('settings.becomeProviderText')}</S.JustifiedText>
      <Spacer height={20} />
      <S.JustifiedText family="BOLD">
        {t('settings.newFunctionalitiesInclude')}
      </S.JustifiedText>
      <Spacer height={10} />
      <View>
        <S.RowContainer>
          <SecondaryColorIcon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
            }}
          />
          <Text>{t('settings.addingServices')}</Text>
        </S.RowContainer>
        <Spacer height={5} />
        <S.RowContainer>
          <SecondaryColorIcon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
            }}
          />
          <Text>{t('settings.addingManualAppointment')}</Text>
        </S.RowContainer>
        <Spacer height={5} />
        <S.RowContainer>
          <SecondaryColorIcon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
            }}
          />
          <Text>{t('settings.receivingAppointments')}</Text>
        </S.RowContainer>
        <Spacer height={5} />
        <S.RowContainer>
          <SecondaryColorIcon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
            }}
          />
          <Text>{t('settings.receivingReviews')}</Text>
        </S.RowContainer>
      </View>
      <Spacer height={10} />
      <S.ButtonsContainer>
        <S.YesButton rounded onPress={onPressYes}>
          <ButtonText>{t('common.yes')}</ButtonText>
        </S.YesButton>
        <S.NoButton rounded onPress={onPressNo}>
          <ButtonText>{t('common.no')}</ButtonText>
        </S.NoButton>
      </S.ButtonsContainer>
    </S.ModalContainer>
  </Modal>
);

BecomeProviderModal.propTypes = {
  onPressYes: PropTypes.func.isRequired,
  onPressNo: PropTypes.func.isRequired,
};

export default BecomeProviderModal;
