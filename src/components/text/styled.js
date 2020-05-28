import styled from 'styled-components/native';

export const StyledText = styled.Text`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'MontserratBold';
`;
