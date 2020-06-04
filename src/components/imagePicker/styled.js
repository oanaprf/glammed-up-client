import styled from 'styled-components/native';

export const StyledImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  margin-right: 5px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
