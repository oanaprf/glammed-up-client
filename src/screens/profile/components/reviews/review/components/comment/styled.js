import styled from 'styled-components/native';

export const CommentTextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CommentText = styled.Text`
  font-family: 'MontserratRegular';
  font-size: ${({ theme }) => theme.text.fontSize.XS}px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
