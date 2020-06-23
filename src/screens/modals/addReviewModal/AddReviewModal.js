import React from 'react';
import PropTypes from 'prop-types';

import { t } from '@@config';
import * as C from '@@utils/constants';
import { Modal, Spacer } from '@@components';
import { ServiceInfo } from '@@screens/common';

import { SaveButton, Rating, Comment } from './components';
import * as S from './styled';

const AddReviewModal = ({ service }) => (
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
      <Rating />
      <Spacer height={10} />
      <Comment />
      <Spacer height={10} />
      <SaveButton />
    </S.ModalContainer>
  </Modal>
);

AddReviewModal.propTypes = {
  service: PropTypes.object.isRequired,
};

export default AddReviewModal;
