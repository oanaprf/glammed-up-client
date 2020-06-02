import styled from 'styled-components/native';

import { Tabs, Text } from '@@components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.theme_black_pink.primary};
`;

export const StyledTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-grow: 0.1;
`;

export const TitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.fontSize.XXXL}px;
  text-align: center;
  font-family: ${({ theme }) => theme.text.fontFamily.REGULAR};
`;

export const StyledLogo = styled.Image`
  width: 40px;
  height: 27px;
  align-self: flex-end;
  margin-right: 35px;
`;

export const StyledCard = styled.View`
  width: 100%;
  flex-grow: 0.9;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledTabs = styled(Tabs)`
  flex: 1;
  width: 100%;
`;
