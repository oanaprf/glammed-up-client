import styled from 'styled-components/native';

import { Text } from '../text';

export const NoResultsContainer = styled.View`
  width: 100%;
  height: 60%;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 20px;
`;
