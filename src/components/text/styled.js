import styled from 'styled-components/native';

export const StyledText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.text.letterSpacing.XS}px;
  color: ${({ theme }) => theme.colors.black};
`;
