import styled from 'styled-components/native';
import { Text } from '@@components';

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ServiceInfoContainer = styled.View`
  flex: 1;
`;

export const TextWithPadding = styled(Text)`
  padding-right: 2px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  margin-left: 2px;
`;
