import styled from 'styled-components/native';

import { Text } from '../text';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 15px;
  padding-bottom: 12px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const StyledList = styled.View`
  position: absolute;
  z-index: 1;
  align-items: stretch;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;

  width: 100%;
  height: ${({ opened, maxHeight }) => (opened ? maxHeight : 0)}px;

  background-color: ${({ theme, dark }) =>
    dark ? theme.colors.lightGrey : theme.colors.white};
  border-radius: ${({ rounded, theme }) =>
    rounded ? theme.borderRadius.XXXL : theme.borderRadius.XL}px;
`;
