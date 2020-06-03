import styled from 'styled-components/native';
import { Text } from '@@components';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextWithPadding = styled(Text)`
  padding-right: 2px;
`;
