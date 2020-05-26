import styled from 'styled-components/native';

import { Tabs, Text } from '@@components';

export const SafeAreaView = styled.SafeAreaView`
  flex: 0;
  background-color: ${({ theme }) => theme.colors.theme_black_pink.primary};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.theme_black_pink.primary};
`;

export const StyledTitle = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0.1;
  padding-bottom: 20px;
`;

export const TitleText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 45px;
  text-align: center;
  font-family: 'MontserratRegular';
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
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XL}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StyledTabs = styled(Tabs)`
  flex: 1;
  width: 100%;
`;
