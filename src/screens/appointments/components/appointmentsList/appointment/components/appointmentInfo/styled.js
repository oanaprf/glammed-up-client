import styled from 'styled-components/native';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TimeText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
`;

export const ServiceNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
`;

export const ProviderNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.MEDIUM};
  font-size: ${({ theme }) => theme.text.fontSize.XS}px;
`;
