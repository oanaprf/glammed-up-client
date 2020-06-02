import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const TextInputWrapper = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.lightGrey : theme.colors.white};
  border-radius: ${({ rounded, theme }) =>
    rounded ? theme.borderRadius.XXXL : theme.borderRadius.XL}px;

  padding: 18px 15px;
  ${({ dark }) =>
    !dark &&
    Platform.select({
      ios: 'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);',
      android: 'elevation: 3;',
    })}
`;

export const StyledTextInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
  flex: 8;
  font-family: ${({ theme }) => theme.text.fontFamily.MEDIUM};
`;

export const StyledIcon = styled.View`
  flex: 1;
`;
