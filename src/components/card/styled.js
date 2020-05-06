import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.M}px;
  ${Platform.select({
    ios: 'box-shadow: 0 0 4px rgba(0,0,0,0.2)',
    android: 'elevation: 10;',
  })}
`;
