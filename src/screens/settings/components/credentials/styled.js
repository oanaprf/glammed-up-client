import styled from 'styled-components/native';
import { Button, Text } from '@@components';

export const CredentialsContainer = styled(Button)`
  background-color: ${({ theme }) => theme.theme_colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.XXL}px;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  align-self: center;
  width: 90%;
`;

export const StyledImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  margin-right: 15px;
`;

export const WhiteText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;

export const RowContainerWithSpaceBetween = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EditCredentialsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.L}px;
  margin-top: 3px;
  padding: 2px 10px;
`;
