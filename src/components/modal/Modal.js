import React from 'react';
import { Modal as BaseModal, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { theme } from '@@config';

import * as S from './styled';

const Modal = ({ children, onCloseModal, isModalOpen, style, title }) => (
  <BaseModal visible={isModalOpen} animationType="fade" transparent={true}>
    <S.Touchable onPress={onCloseModal}>
      <S.ModalBackground>
        <S.Touchable>
          <S.ModalContent style={style}>
            <S.ModalHeader>
              <S.ModalTitleContainer>
                <S.ModalTitleText>{title}</S.ModalTitleText>
              </S.ModalTitleContainer>
              <TouchableOpacity
                onPress={onCloseModal}
                hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
              >
                <S.ModalCloseIcon
                  {...{
                    name: 'x',
                    type: 'feather',
                    size: 20,
                    color: theme.colors.white,
                  }}
                />
              </TouchableOpacity>
            </S.ModalHeader>
            <S.ModalBody>{children}</S.ModalBody>
          </S.ModalContent>
        </S.Touchable>
      </S.ModalBackground>
    </S.Touchable>
  </BaseModal>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Modal;
