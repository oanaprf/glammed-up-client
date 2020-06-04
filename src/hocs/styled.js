import styled from 'styled-components/native';

import { Text } from '@@components/text';

export const StyledLabel = styled(Text)`
  padding-bottom: 2px;
  ${({ noLabelPadding }) => !noLabelPadding && 'padding-left: 10px;'};
`;
