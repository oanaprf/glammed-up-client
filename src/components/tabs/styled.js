import styled from 'styled-components/native';

export const TabHeader = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

export const TabLabel = styled.TouchableOpacity`
  padding: 10px;
  ${({ isTabSelected, theme }) =>
    isTabSelected &&
    `border-bottom-width: 6px;
   border-bottom-left-radius: ${theme.borderRadius.M}px;
   border-bottom-right-radius: ${theme.borderRadius.M}px;
   border-bottom-color: ${theme.colors.theme_black_pink.secondary}`}
`;

export const TabContent = styled.View`
  flex: 1;
  ${({ isTabSelected }) => !isTabSelected && 'display: none;'};
`;
