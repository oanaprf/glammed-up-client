import styled from 'styled-components/native';
import { Button, Text } from '@@components';

export const ModalContainer = styled.View`
  padding: 10px;
`;

export const InfoContainer = styled.View`
  padding: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ApproveButton = styled(Button)`
  background-color: ${({ theme }) => theme.theme_colors.secondary};
  flex: 0.45;
`;

export const RejectButton = styled(Button)`
  flex: 0.45;
`;

export const PrimaryColorText = styled(Text)`
  color: ${({ theme }) => theme.theme_colors.secondary};
`;

export const MarginedText = styled(Text)`
  margin-right: 7px;
`;
