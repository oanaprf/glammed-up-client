import styled from 'styled-components/native';
import { Card } from '@@components';

export const CardContainer = styled(Card)`
  width: 100%;
  margin-bottom: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`;

export const UserProfilePicture = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: ${({ theme }) => theme.borderRadius.M}px;
`;
