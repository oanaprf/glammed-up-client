import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { NumericInput } from '@@components/textInput';

export const NumberSpinner = styled.View`
  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.lightGrey : theme.colors.white};
  flex-direction: row;
  align-items: center;
  border-radius: ${({ rounded, theme }) =>
    rounded ? theme.borderRadius.XXXL : theme.borderRadius.XL}px;
  ${({ dark }) =>
    !dark &&
    Platform.select({
      ios: 'box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);',
      android: 'elevation: 3;',
    })}
    border: ${({ error, theme }) =>
      error ? `2px solid ${theme.colors.error}` : '2px solid transparent'}
`;

export const StyledNumericInput = styled(NumericInput)`
  ${Platform.select({
    ios: 'box-shadow: 0 0 0 rgba(0, 0, 0, 0);',
    android: 'elevation: 0;',
  })}
  width: 68px;
  text-align: center;
`;

export const LeftPaddedTouchableOpacity = styled.TouchableOpacity`
  padding-left: 20px;
`;

export const RightPaddedTouchableOpacity = styled.TouchableOpacity`
  padding-right: 20px;
`;
