import styled from 'styled-components/native';
import { Text } from '@@components';

export const AppointmentInfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 5px;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
`;
