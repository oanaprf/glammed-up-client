import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const TextInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.lightGrey : theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.XL}px;

  elevation: 20;
  padding: 18px 15px;
  ${Platform.select({
    ios: 'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);',
    android: 'elevation: 1;',
  })}
`;

export const StyledTextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
  font-weight: bold;
  flex: 8;
`;

export const StyledIcon = styled.View`
  flex: 1;
`;
