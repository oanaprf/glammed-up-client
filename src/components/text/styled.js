import styled from 'styled-components/native';

export const StyledText = styled.Text`
  font-family: ${({ family, theme }) => theme.text.fontFamily[family]};
  font-size: ${({ size, theme }) => theme.text.fontSize[size]}px;
  ${({ uppercase }) => uppercase && 'text-transform: uppercase;'}
`;
