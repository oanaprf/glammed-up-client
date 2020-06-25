import React from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import * as S from './styled';
import { SignUpButton, FirstName, LastName } from './components';
import { Email, Password } from '../common';

const SignUp = ({ formValues, setFormValues, onPress, submitting }) => (
  <>
    <Spacer height={10} />
    <FirstName {...{ formValues, setFormValues, submitting }} />
    <S.SmallSpacer />
    <LastName {...{ formValues, setFormValues, submitting }} />
    <S.SmallSpacer />
    <Email {...{ formValues, setFormValues, submitting }} />
    <S.SmallSpacer />
    <Password {...{ formValues, setFormValues, submitting }} />
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
  submitting: PropTypes.bool.isRequired,
};

export default SignUp;
