import styled from 'styled-components/native';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
`;