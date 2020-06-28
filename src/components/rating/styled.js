import styled from 'styled-components/native';

export const RatingContainer = styled.View`
  flex-direction: row;
  border-radius: ${({ theme }) => theme.borderRadius.XXXL}px;
  border: ${({ error, theme }) =>
    error ? `2px solid ${theme.colors.error}` : '2px solid transparent'};
  align-self: flex-start;
`;
