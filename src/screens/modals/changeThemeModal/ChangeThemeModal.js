import React from 'react';
import { Icon } from 'react-native-elements';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import { SaveButton } from './components';
import * as S from './styled';

const ChangeThemeModal = () => (
  <Modal
    name={C.MODALS.CHANGE_THEME_MODAL}
    style={{ width: '80%' }}
    title={t('settings.changeTheme')}
  >
    <S.ModalContainer>
      <S.JustifiedText>{t('settings.changeThemeIntro')}</S.JustifiedText>
      <Spacer height={5} />
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-unchecked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          PURPLE
        </S.PaddedText>
        <S.ColorView color="#b900cb" />
      </S.RowContainer>
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-checked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          FUCHSIA
        </S.PaddedText>
        <S.ColorView color="#fc00ff" />
      </S.RowContainer>
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-unchecked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          FIRE
        </S.PaddedText>
        <S.ColorView color="#FA2A4C" />
      </S.RowContainer>
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-unchecked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          ORANGE
        </S.PaddedText>
        <S.ColorView color="#ff6a00" />
      </S.RowContainer>
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-unchecked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          AQUA
        </S.PaddedText>
        <S.ColorView color="#00C2BA" />
      </S.RowContainer>
      <S.RowContainer>
        <Icon
          {...{
            name: 'radio-button-unchecked',
            size: 20,
          }}
        />
        <S.PaddedText family="BOLD" uppercase>
          BLUE
        </S.PaddedText>
        <S.ColorView color="#0057FF" />
      </S.RowContainer>
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

export default ChangeThemeModal;
