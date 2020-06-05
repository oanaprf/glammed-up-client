import styled from 'styled-components/native';
import { Icon } from 'react-native-elements';
import { ButtonText } from '@@components';

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const StyledIcon = styled(Icon)`
  width: 45px;
`;

export const StyledText = styled(ButtonText)`
  color: ${({ theme }) => theme.colors.black};
`;
