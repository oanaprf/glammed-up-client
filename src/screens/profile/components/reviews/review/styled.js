import styled from 'styled-components/native';
import { Card } from '@@components';

export const CardContainer = styled(Card)`
  flex-direction: row;
  width: 95%;
  margin-bottom: 10px;
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
