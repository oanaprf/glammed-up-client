import styled from 'styled-components/native';

import { Text } from '../../../text';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.grey};
`;
