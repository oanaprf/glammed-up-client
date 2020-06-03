import React from 'react';

import { Spacer, Text } from '@@components';
import * as S from './styled';

const AppointmentInfo = () => (
  <S.AppointmentInfoContainer>
    <Text family="BOLD" size="M">
      13:30
    </Text>
    <Spacer height={5} />
    <Text>Oana Popescu</Text>
  </S.AppointmentInfoContainer>
);

export default AppointmentInfo;
