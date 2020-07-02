import styled from 'styled-components/native';
import { Text } from '../text';

export const ToastContainer = styled.View`
  margin-top: 40px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.error};
  z-index: 999;
  position: absolute;
  align-self: center;
  border-radius: ${({ theme }) => theme.borderRadius.XL}px;
  flex-direction: row;
  align-items: center;
  width: 95%;
  justify-content: space-between;
`;

export const WhiteText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  flex: 1;
`;
