import styled from 'styled-components/native';

import { Tabs } from '@@components';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  justify-content: center;
  padding-left: 25px;
  padding-top: 15px;
  flex: 0.1;
`;

export const Body = styled.View`
  flex: 0.9;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 10px 0 10px;
`;

export const StyledTabs = styled(Tabs)`
  flex: 1;
  width: 100%;
`;
