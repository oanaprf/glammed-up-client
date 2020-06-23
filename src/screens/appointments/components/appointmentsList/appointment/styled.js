import styled from 'styled-components/native';
import { Card, Text } from '@@components';

export const CardContainer = styled(Card)`
  flex-direction: row;
  width: 85%;
  margin-bottom: 10px;
`;

export const AppointmentInfo = styled.View`
  flex: 1;
  padding: 10px 10px;
`;

export const FlexText = styled(Text)`
  flex: 0.97;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProviderInfoContainer = styled.View`
  flex: 1;
`;
