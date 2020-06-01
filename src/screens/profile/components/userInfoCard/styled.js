import styled from 'styled-components/native';
import { Text } from '@@components';

export const CardContainer = styled.View`
  border-radius: ${({ theme }) => theme.borderRadius.XL}px;
  background-color: ${({ theme }) => theme.colors.theme_black_pink.primary};
  padding: 10px 15px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 80%;
`;

export const StyledText = styled(Text)`
  text-transform: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  font-family: 'MontserratRegular';
  flex: 0.97;
`;
