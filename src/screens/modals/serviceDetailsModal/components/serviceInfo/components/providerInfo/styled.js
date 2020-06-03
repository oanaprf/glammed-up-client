import styled from 'styled-components/native';
import { Text } from '@@components';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProviderInfoContainer = styled.View`
  width: 100%;
`;

export const FlexText = styled(Text)`
  flex: 0.97;
`;
