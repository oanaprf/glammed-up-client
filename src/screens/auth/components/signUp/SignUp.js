import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Spacer } from '@@components';

import * as S from './styled';
import { SignUpButton, FirstName, LastName } from './components';
import { Email, Password } from '../common';

const SignUp = ({ formValues, setFormValues, onPress, submitting }) => (
  <KeyboardAvoidingView
    {...{
      behavior: 'padding',
      ...(Platform.OS === 'ios' && { keyboardVerticalOffset: 200 }),
    }}
  >
    <ScrollView showsVerticalScrollIndicator={false}>
      <Spacer height={10} />
      <FirstName {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <LastName {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <Email {...{ formValues, setFormValues, submitting }} />
      <Spacer height={10} />
      <Password {...{ formValues, setFormValues, submitting }} />
      <Spacer />
      <S.SignUpContainer style={{ flex: 1 }}>
        <SignUpButton onPress={onPress} />
      </S.SignUpContainer>
    </ScrollView>
  </KeyboardAvoidingView>
);

SignUp.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SignUp;
