import styled from 'styled-components/native';
import { Text } from '@@components';

export const CommentTextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CommentText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;
