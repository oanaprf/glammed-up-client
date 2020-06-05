import styled from 'styled-components/native';

export const StyledSmallImage = styled.Image`
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

export const StyledMediumImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
`;
