import styled from 'styled-components/native';

export const ServiceDetails = styled.View`
  width: 100%;
  padding: 0 7px 7px 7px;
`;

export const ServiceNameText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RatingText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 2px;
`;

export const PriceValueText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.BOLD};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 2px;
`;

export const PriceCurrencyText = styled.Text`
  font-family: ${({ theme }) => theme.text.fontFamily.MEDIUM};
  font-size: ${({ theme }) => theme.text.fontSize.XS}px;
  color: ${({ theme }) => theme.colors.white};
`;
