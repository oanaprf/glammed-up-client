import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Header = styled.View`
  justify-content: center;
  padding-left: 25px;
  flex: 0.1;
`;

export const Body = styled.View`
  flex: 0.9;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchBarContainer = styled.View`
  padding: 10px 10px 0 10px;
`;
