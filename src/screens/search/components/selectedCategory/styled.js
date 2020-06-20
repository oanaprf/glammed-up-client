import styled from 'styled-components/native';
import { Button, ButtonText } from '@@components';

export const StyledButton = styled(Button)`
  align-self: center;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.M}px;
  margin: 15px 15px 0 0;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content-center;
`;

export const StyledText = styled(ButtonText)`
  text-align: center;
  padding-right: 5px;
`;
