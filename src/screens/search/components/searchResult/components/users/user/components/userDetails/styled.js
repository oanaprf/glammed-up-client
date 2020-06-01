import styled from 'styled-components/native';

export const UserDetailsContainer = styled.View`
  flex: 0.95;
  justify-content: space-between;
`;

export const UserFullname = styled.Text`
  font-family: 'MontserratBold';
  font-size: ${({ theme }) => theme.text.fontSize.L}px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledText = styled.Text`
  font-family: 'MontserratMedium';
  font-size: ${({ theme }) => theme.text.fontSize.XS}px;
  flex: 0.97;
`;
