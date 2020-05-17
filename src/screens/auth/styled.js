import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Card, Tabs } from '@@components';

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 0;
  background-color: ${({ theme }) => theme.colors.theme_timber.primary};
`;

export const TopBackground = styled(LinearGradient)`
  width: 100%;
  flex-grow: 1.5;
  align-items: center;
`;

export const BottomBackground = styled.View`
  flex-grow: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Logo = styled.Image`
  height: 25%;
  width: 50%;
`;

export const StyledCard = styled(Card)`
  width: 85%;
  height: 70%;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 20px 20px;
  position: absolute;
  border-radius: ${({ theme }) => theme.borderRadius.XL}px;
`;

export const StyledTabs = styled(Tabs)`
  flex: 1;
  width: 100%;
`;
