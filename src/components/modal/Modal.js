import React from 'react';
import { Modal as BaseModal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import { theme } from '@@config';

import { Text } from '../text';
import * as S from './styled';

const Modal = ({ children, onCloseModal, isModalOpen, style, title }) => (
  <BaseModal
    visible={isModalOpen}
    animationType="fade"
    transparent={true}
    propagateSwipe={true}
  >
    <S.Touchable onPress={onCloseModal}>
      <S.ModalBackground>
        <S.Touchable>
          <S.ModalContent style={style}>
            {title && (
              <S.ModalHeader>
                <S.ModalTitleContainer>
                  <Text size="M" family="BOLD" uppercase>
                    {title}
                  </Text>
                </S.ModalTitleContainer>
                <TouchableOpacity
                  onPress={onCloseModal}
                  activeOpacity={0.6}
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
            )}
            <>{children}</>
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
