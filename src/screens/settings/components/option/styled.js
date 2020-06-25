import styled from 'styled-components/native';
import { ButtonText, SecondaryColorIcon } from '@@components';

export const Option = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const StyledIcon = styled(SecondaryColorIcon)`
  width: 45px;
`;

export const StyledText = styled(ButtonText)`
  color: ${({ theme }) => theme.colors.black};
`;
