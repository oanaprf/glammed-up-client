import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';
import { ServiceInfo } from '@@screens/common';

import { SaveButton, Rating, Comment } from './components';
import * as S from './styled';

const AddReviewModal = ({
  service,
  formValues,
  setFormValues,
  submitting,
  setSubmitting,
}) => (
  <Modal
    name={C.MODALS.ADD_REVIEW}
    style={{ width: '90%' }}
    title={t('review.addReview')}
  >
    <S.ModalContainer>
      <S.PaddedContainer>
        <ServiceInfo service={service} />
      </S.PaddedContainer>
      <Spacer height={30} />
      <Rating {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <Comment {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <SaveButton {...{ service, formValues, setSubmitting }} />
    </S.ModalContainer>
  </Modal>
);

AddReviewModal.propTypes = {
  service: PropTypes.object.isRequired,
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default AddReviewModal;
