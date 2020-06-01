import styled from 'styled-components/native';
import { Text } from '@@components';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const StyledText = styled(Text)`
  font-family: 'MontserratMedium';
  font-size: ${({ theme }) => theme.text.fontSize.S}px;
  color: ${({ theme }) => theme.colors.white};
`;
