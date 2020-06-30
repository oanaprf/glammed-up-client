import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getRating } from '@@store/modules/services/selectors';

import { Button, Text } from '@@components';

export const StyledText = styled(Text)`
  margin-right: 2px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  padding: ${({ user }) =>
    Number.isInteger(getRating(user)) ? '18px 12px' : '18px 5px'}
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  ${Platform.select({
    ios: 'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);',
    android: 'elevation: 3;',
  })}}
  opacity: ${({ user }) => (getRating(user) ? 1 : 0)}
`;
