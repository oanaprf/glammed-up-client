import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const TabBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content:space-around;
  height: 60px;

  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  
  ${Platform.select({
    ios: 'box-shadow: 0 0 4px rgba(0,0,0,0.2)',
    android: 'elevation: 10;',
  })}

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Point = styled.View`
  width: 5px;
  height: 5px;
  border-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.theme_blue.primary : theme.colors.black};
  margin-top: 5px;
`;

export const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;
