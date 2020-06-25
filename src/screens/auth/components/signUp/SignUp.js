import React from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import * as S from './styled';
import { SignUpButton, FirstName, LastName } from './components';
import { Email, Password } from '../common';

const SignUp = ({ formValues, setFormValues, onPress }) => (
  <>
    <Spacer height={10} />
    <FirstName {...{ formValues, setFormValues }} />
    <S.SmallSpacer />
    <LastName {...{ formValues, setFormValues }} />
    <S.SmallSpacer />
    <Email {...{ formValues, setFormValues }} />
    <S.SmallSpacer />
    <Password {...{ formValues, setFormValues }} />
    <S.MediumSpacer />
    <S.SignUpContainer style={{ flex: 1 }}>
      <SignUpButton onPress={onPress} />
    </S.SignUpContainer>
  </>
);

SignUp.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SignUp;
