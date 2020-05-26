import styled from 'styled-components/native';
import { Text } from '@@components';

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  flex-grow: 1;
  text-align: center;
`;
