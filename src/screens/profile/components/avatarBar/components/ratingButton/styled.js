import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { Button, Text } from '@@components';

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.theme_black_pink.primary};
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
  margin-right: 3px;
  font-family: ${({ theme }) => theme.text.fontFamily.MEDIUM};
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  padding: 15px 11px;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  ${Platform.select({
    ios: 'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);',
    android: 'elevation: 3;',
  })}}
`;
