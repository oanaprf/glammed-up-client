import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { Button, Text } from '@@components';

export const StyledText = styled(Text)`
  margin-right: 3px;
`;

export const StyledButton = styled(Button)`
  background-color: transparent;
  align-items: center;
  padding: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  ${Platform.select({
    ios: 'box-shadow: 0 0 0 rgba(0, 0, 0, 0);',
    android: 'elevation: 0;',
  })}
`;
