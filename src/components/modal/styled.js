import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Touchable = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalTitleContainer = styled.View`
  padding-left: 15px;
  justify-content: center;
`;

export const ModalCloseIcon = styled(Icon)`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
  border-top-right-radius: ${({ theme }) => theme.borderRadius.L}px;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.L}px;
`;
