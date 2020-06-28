import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';

import {
  Name,
  Category,
  Price,
  Duration,
  SaveButton,
  ServiceImagePicker,
} from './components';
import * as S from './styled';

const AddServiceModal = ({
  formValues,
  setFormValues,
  submitting,
  setSubmitting,
  onCloseModal,
}) => (
  <Modal
    name={C.MODALS.ADD_SERVICE}
    style={{ width: '90%' }}
    title={t('service.addService')}
    onCloseModal={onCloseModal}
  >
    <S.ModalContainer>
      <Name {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <Category {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <S.RowContainer>
        <Price {...{ formValues, setFormValues, submitting }} />
        <Duration {...{ formValues, setFormValues, submitting }} />
      </S.RowContainer>
      <Spacer height={10} />
      <View style={{ zIndex: -1 }}>
        <ServiceImagePicker {...{ formValues, setFormValues, submitting }} />
      </View>
      <Spacer height={10} />
      <SaveButton {...{ formValues, setSubmitting }} />
    </S.ModalContainer>
  </Modal>
);

AddServiceModal.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default AddServiceModal;
