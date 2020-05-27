import React from 'react';
import PropTypes from 'prop-types';

import { Spacer } from '@@components';

import * as S from './styled';
import { SignUpButton, FirstName, LastName } from './components';
import { Email, Password } from '../common';

const SignUp = ({ formValues, onChange, onPress }) => (
  <>
    <Spacer height={40} />
    <FirstName value={formValues.firstName} onChange={onChange} />
    <Spacer />
    <LastName value={formValues.lastName} onChange={onChange} />
    <Spacer />
    <Email value={formValues.email} onChange={onChange} />
    <Spacer />
    <Password value={formValues.password} onChange={onChange} />
    <S.MediumSpacer />
    <SignUpButton onPress={onPress} />
  </>
);

SignUp.propTypes = {
  formValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default SignUp;
