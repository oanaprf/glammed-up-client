import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

import { Card } from '@@components';

export const CardContainer = styled(Card)`
  width: 45%;
  height: 150px;
  position: relative;
  margin-right: 10px;
`;

export const ServicePicture = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
`;

export const StyledLinearGradient = styled(LinearGradient)`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
`;
