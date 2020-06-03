import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { Text } from '@@components';

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px 0 20px 50px;
`;

export const StyledIcon = styled(Icon)`
  width: 45px;
`;

export const StyledText = styled(Text)`
  font-size: ${({ theme }) => theme.text.fontSize.S};
`;
