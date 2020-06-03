import styled from 'styled-components/native';
import { Button, ButtonText } from '@@components';

export const ButtonContainer = styled(Button)`
  width: 140px;
  height: 140px;
  padding: 0;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled(ButtonText)`
  text-align: center;
`;

export const StyledImage = styled.Image`
  width: 30%;
  height: 30%;
  margin-bottom: 10px;
`;
