import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  ${Platform.select({
    ios: 'box-shadow: 0 0 4px rgba(0,0,0,0.1)',
    android: 'elevation: 3;',
  })}
`;
