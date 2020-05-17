import styled from 'styled-components/native';
import { Button, Text } from '@@components';

export const StyledButton = styled(Button)`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  flex-grow: 1;
  text-align: center;
`;
