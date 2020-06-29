import styled from 'styled-components/native';
import { Card, Text } from '@@components';

export const CardContainer = styled(Card)`
  flex-direction: row;
  width: 90%;
  margin-bottom: 10px;
  height: 80px;
  width: 200px;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
`;

export const ReviewInfo = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ServicePicture = styled.Image`
  width: 150px;
  height: 150px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.L}px;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.L}px;
`;

export const CommentTextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CommentText = styled(Text)`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextWithPadding = styled(Text)`
  padding-right: 2px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  margin-left: 2px;
`;
