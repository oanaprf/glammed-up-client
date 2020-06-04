import styled from 'styled-components/native';

import { Service } from '@@screens/common';
import { Button } from '@@components';

export const StyledService = styled(Service)`
  width: 45%;
  height: 150px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  padding: 15px;
`;
