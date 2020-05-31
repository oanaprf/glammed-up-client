import styled from 'styled-components/native';

import { Text } from '@@components';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex: 0.1;
`;

export const Title = styled(Text)`
  font-size: ${({ theme }) => theme.text.fontSize.XL}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'MontserratRegular';
`;

export const Body = styled.View`
  flex: 0.9;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 10px 0 10px;
`;
