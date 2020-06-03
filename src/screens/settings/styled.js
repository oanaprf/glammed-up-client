import styled from 'styled-components/native';

import { Text } from '@@components';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 10px;
  flex: 0.2;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.text.fontSize.XL}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.text.fontFamily.REGULAR};
  margin-left: 25px;
`;

export const Body = styled.View`
  flex: 0.8;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
`;
