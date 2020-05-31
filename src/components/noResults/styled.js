import styled from 'styled-components/native';

export const NoResultsContainer = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  font-family: 'MontserratMedium';
  font-size: ${({ theme }) => theme.text.fontSize.L}px;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 20px;
`;
