import styled from 'styled-components/native';

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceNameText = styled.Text`
  font-family: 'MontserratBold';
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
`;

export const RatingText = styled.Text`
  font-family: 'MontserratBold';
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
  padding-right: 2px;
`;

export const PriceValueText = styled.Text`
  font-family: 'MontserratBold';
  font-size: ${({ theme }) => theme.text.fontSize.M}px;
  padding-right: 2px;
`;

export const PriceCurrencyText = styled.Text`
  font-family: 'MontserratMedium';
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
`;

export const ProviderInfoContainer = styled.View`
  width: 100%;
`;

export const UserInfoText = styled.Text`
  font-family: 'MontserratMedium';
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  flex: 0.97;
`;
