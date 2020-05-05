import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const AnimatedButton = styled(Animated.View)`
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.theme_purple.primary};
  border-radius: 50px;
`;
