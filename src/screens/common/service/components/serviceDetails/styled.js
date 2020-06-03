import styled from 'styled-components/native';
import { Text } from '@@components';

export const ServiceDetails = styled.View`
  width: 100%;
  padding: 0 7px 7px 7px;
`;

export const WhiteText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const WhiteTextWithPadding = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  padding-right: 2px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
