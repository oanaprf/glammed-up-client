import styled from 'styled-components/native';

import { Button } from '@@components';

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.theme_colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  padding: 15px;
`;
export const LoaderContainer = styled.View`
  height: 40%;
  justify-content: center;
`;
