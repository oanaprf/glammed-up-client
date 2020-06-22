import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { Button } from '@@components';

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  ${Platform.select({
    ios: 'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);',
    android: 'elevation: 3;',
  })}}
  opacity: ${({ isOwnProfile }) => (isOwnProfile ? 1 : 0)}
`;
