import styled from 'styled-components/native';
import { Button, Text } from '@@components';

export const ModalContainer = styled.View`
  padding: 20px;
`;

export const JustifiedText = styled(Text)`
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const YesButton = styled(Button)`
  background-color: ${({ theme }) => theme.theme_colors.secondary};
  flex: 0.45;
`;

export const NoButton = styled(Button)`
  flex: 0.45;
`;
