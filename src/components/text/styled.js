import styled from 'styled-components/native';

export const StyledText = styled.Text`
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.text.letterSpacing.S}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: 'MontserratBold';
`;
