import styled from 'styled-components/native';

import { Button } from '@@components';

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  padding: 15px;
`;
