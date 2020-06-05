import styled from 'styled-components/native';
import { Text } from '@@components';

export const ModalContainer = styled.View`
  padding: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;

export const FlexContainer = styled.View`
  flex: 0.498;
`;

export const PaddedText = styled(Text)`
  padding: 0 10px;
`;

export const JustifiedText = styled(Text)`
  text-align: justify;
`;

export const ColorView = styled.View`
  border-radius: ${({ theme }) => theme.borderRadius.XL}px;
  background-color: ${({ color }) => color};
  height: 25px;
  width: 25px;
`;
