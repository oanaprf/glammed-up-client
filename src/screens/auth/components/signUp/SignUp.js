import React from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import * as S from './styled';
import { SignUpButton, FirstName, LastName } from './components';
import { Email, Password } from '../common';

const SignUp = ({ formValues, onChange, onPress }) => (
  <>
    <Spacer height={10} />
    <FirstName value={formValues.firstName} onChange={onChange} />
    <S.SmallSpacer />
    <LastName value={formValues.lastName} onChange={onChange} />
    <S.SmallSpacer />
    <Email value={formValues.email} onChange={onChange} />
    <S.SmallSpacer />
    <Password value={formValues.password} onChange={onChange} />
    <S.MediumSpacer />
    <S.SignUpContainer style={{ flex: 1 }}>
      <SignUpButton onPress={onPress} />
    </S.SignUpContainer>
  </>
);

SignUp.propTypes = {
  formValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SignUp;
