import styled from 'styled-components/native';
import { Text } from '@@components';

export const ModalContainer = styled.View`
  padding: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  padding: 5px;
`;

export const FlexContainer = styled.View`
  flex: 0.498;
`;

export const PaddedText = styled(Text)`
  padding-left: 10px;
`;

export const JustifiedText = styled(Text)`
  text-align: justify;
`;
