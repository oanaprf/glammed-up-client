import styled from 'styled-components/native';

export const TabHeader = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const TabLabel = styled.TouchableOpacity`
  padding: 10px;
  ${({ isTabSelected, theme }) =>
    isTabSelected &&
    `border-bottom-width: 6px;
   border-bottom-left-radius: ${theme.borderRadius.L}px;
   border-bottom-right-radius: ${theme.borderRadius.L}px;
   border-bottom-color: ${theme.colors.theme_blue.primary}`}
`;

export const TabContent = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  ${({ isTabSelected }) => !isTabSelected && 'display: none;'};
`;
