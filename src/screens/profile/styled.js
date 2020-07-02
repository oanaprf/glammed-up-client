import styled from 'styled-components/native';
import { Tabs } from '@@components';
import { Service } from '@@screens/common';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  align-items: flex-start;
  flex: 0.15;
  padding-top: 15px;
`;

export const Body = styled.View`
  flex: 0.85;
  align-items: center;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
`;

export const EmptyView = styled.View`
  height: 60px;
`;

export const StyledTabs = styled(Tabs)`
  flex: 1;
  width: 100%;
`;

export const StyledService = styled(Service)`
  width: 45%;
  height: 150px;
`;
