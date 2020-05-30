import styled from 'styled-components/native';
import { Button } from '@@components';

export const AvatarBar = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: -60px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.theme_black_pink.secondary};
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfilePicture = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: ${({ theme }) => theme.borderRadius.XXL}px;
`;
