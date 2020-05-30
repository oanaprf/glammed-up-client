import styled from 'styled-components/native';

import { Text } from '@@components';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.3;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.text.fontSize.XXL}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'MontserratRegular';
  letter-spacing: ${({ theme }) => theme.text.letterSpacing.S}px;
`;

export const Body = styled.View`
  flex: 0.7;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const AppOptions = styled.View`
  flex: 0.8;
  justify-content: center;
`;

export const HorizontalBar = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) =>
    theme.colors.theme_black_pink.secondary};
  flex-grow: 0.1;
  margin-right: 60px;
  margin-left: 60px;
`;

export const Logout = styled.View`
  flex: 0.2;
  justify-content: center;
`;
