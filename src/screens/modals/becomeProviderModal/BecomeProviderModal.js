import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import { Modal, ButtonText, Text, Spacer } from '@@components';
import * as C from '@@utils/constants';
import { t, theme } from '@@config';

import * as S from './styled';

const BecomeProviderModal = () => (
  <Modal name={C.MODALS.BECOME_PROVIDER} style={{ width: '90%' }}>
    <S.ModalContainer>
      <S.WandContainer>
        <Icon
          {...{
            name: 'magic-wand',
            type: 'simple-line-icon',
            size: 40,
            color: theme.colors.theme_black_pink.secondary,
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
          <Icon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
              color: theme.colors.theme_black_pink.secondary,
            }}
          />
          <Text>{t('settings.addingServices')}</Text>
        </S.RowContainer>
        <Spacer height={5} />
        <S.RowContainer>
          <Icon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
              color: theme.colors.theme_black_pink.secondary,
            }}
          />
          <Text>{t('settings.addingManualAppointment')}</Text>
        </S.RowContainer>
        <Spacer height={5} />
        <S.RowContainer>
          <Icon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
              color: theme.colors.theme_black_pink.secondary,
            }}
          />
          <Text>{t('settings.receivingAppointments')}</Text>
        </S.RowContainer>
        <Spacer height={5} />
        <S.RowContainer>
          <Icon
            {...{
              name: 'chevron-right',
              type: 'feather',
              size: 20,
              color: theme.colors.theme_black_pink.secondary,
            }}
          />
          <Text>{t('settings.receivingReviews')}</Text>
        </S.RowContainer>
      </View>
      <Spacer height={20} />
      <S.ButtonsContainer>
        <S.YesButton rounded>
          <ButtonText>{t('common.yes')}</ButtonText>
        </S.YesButton>
        <S.NoButton rounded>
          <ButtonText>{t('common.no')}</ButtonText>
        </S.NoButton>
      </S.ButtonsContainer>
    </S.ModalContainer>
  </Modal>
);

export default BecomeProviderModal;
