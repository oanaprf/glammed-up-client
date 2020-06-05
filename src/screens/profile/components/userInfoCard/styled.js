import styled from 'styled-components/native';
import { Text, Card } from '@@components';

export const CardContainer = styled(Card)`
  padding: 10px 15px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 80%;
`;

export const StyledText = styled(Text)`
  flex: 0.97;
`;
