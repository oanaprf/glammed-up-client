import styled from 'styled-components/native';

export const AppointmentInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ServiceNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
  margin-left: 5px;
`;

export const ProviderNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.MEDIUM};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  margin-left: 5px;
`;
