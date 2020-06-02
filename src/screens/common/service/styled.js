import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Card } from '@@components';

export const CardContainer = styled(Card)`
  width: 100%;
  height: 180px;
  position: relative;
  margin-bottom: 10px;
`;

export const ServicePicture = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  overflow: hidden;
  justify-content: flex-end;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
`;
