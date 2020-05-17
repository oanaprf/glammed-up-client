import styled from 'styled-components/native';

import { Spacer, Text } from '@@components';

export const MediumSpacer = styled(Spacer)`
  flex-grow: 0.4;
`;

export const SmallSpacer = styled(Spacer)`
  flex-grow: 0.2;
`;

export const ItalicText = styled.Text`
  text-align: center;
  font-style: italic;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.text.fontSize.XS}px;
`;
const horizontalFlex = `
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const HorizontalBarWrapper = styled.View`
  width: 70%;
  ${horizontalFlex}
`;

export const HorizontalBar = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.theme_timber.secondary};
  flex-grow: 2;
`;

export const PaddedText = styled(Text)`
  padding: 10px;
`;

export const CenteredText = styled.Text`
  text-align: center;
`;

export const SocialIconsWrapper = styled.View`
  ${horizontalFlex}
`;

export const PaddedTouchableOpacity = styled.TouchableOpacity`
  padding: 5px;
`;
