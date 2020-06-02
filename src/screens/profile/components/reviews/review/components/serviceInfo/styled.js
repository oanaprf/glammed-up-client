import styled from 'styled-components/native';

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ServiceInfoContainer = styled.View`
  flex: 1;
`;

export const ServiceNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  padding-right: 2px;
`;

export const ProviderNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.MEDIUM};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  margin-left: 2px;
`;
