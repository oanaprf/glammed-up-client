import styled from 'styled-components/native';
import { Text, Tabs } from '@@components';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.15;
`;

export const Body = styled.View`
  flex: 0.85;
  align-items: center;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const UserFullname = styled(Text)`
  font-size: ${({ theme }) => theme.text.fontSize.XL}px;
  font-family: 'MontserratMedium';
  text-transform: none;
`;

export const EmptyView = styled.View`
  height: 60px;
`;

export const StyledTabs = styled(Tabs)`
  flex: 1;
  width: 100%;
`;
