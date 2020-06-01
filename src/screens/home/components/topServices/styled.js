import styled from 'styled-components/native';

export const StyledText = styled.Text`
  font-family: 'MontserratBold';
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
`;

export const TopServicesContainer = styled.View`
  padding: 10px 0;
`;
