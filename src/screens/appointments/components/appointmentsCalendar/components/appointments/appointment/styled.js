import styled from 'styled-components/native';
import { Card } from '@@components';

export const CardContainer = styled(Card)`
  flex-direction: row;
  width: 80%;
  margin-bottom: 10px;
`;

export const AppointmentInfo = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ServicePicture = styled.Image`
  width: 80px;
  height: 80px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.L}px;
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.L}px;
`;
