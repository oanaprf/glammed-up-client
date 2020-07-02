import React from 'react';
import PropTypes from 'prop-types';
import { SliderBox } from 'react-native-image-slider-box';

import { Modal } from '@@components';
import * as C from '@@utils/constants';
import { t } from '@@config';

import * as S from './styled';

const signUp = require('@@assets/images/help/signUp.jpg');
const home = require('@@assets/images/help/home.jpg');
const serviceDetails = require('@@assets/images/help/serviceDetails.jpg');
const bookAppointment = require('@@assets/images/help/bookAppointment.jpg');

const pictures = [signUp, home, serviceDetails, bookAppointment];
const text = [
  'settings.helpRegister',
  'settings.helpHome',
  'settings.helpServiceDetails',
  'settings.helpBookAppointment',
];

const HelpModal = ({ index, setIndex }) => (
  <Modal
    name={C.MODALS.HELP_MODAL}
    style={{ width: '90%', height: '70%' }}
    title={t('settings.help')}
  >
    <>
      <S.ModalContainer>
        <SliderBox
          images={pictures}
          sliderBoxHeight={400}
          resizeMode={'contain'}
          currentImageEmitter={i => setIndex(i)}
        />
      </S.ModalContainer>
      <S.AlignedText size="M">{t(text[index])}</S.AlignedText>
    </>
  </Modal>
);

HelpModal.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
};

export default HelpModal;
