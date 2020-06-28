/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/fp/isEmpty';
import getOr from 'lodash/fp/getOr';
import { Icon } from 'react-native-elements';
import {
  Platform,
  UIManager,
  LayoutAnimation,
  TouchableOpacity,
  View,
} from 'react-native';
import { t, theme } from '@@config';
import * as S from './styled';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Toast = ({ error = {} }) => {
  const [visible, setVisible] = useState(!isEmpty(error));
  useEffect(() => {
    setVisible(!isEmpty(error));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    const timer = setTimeout(() => {
      setVisible(false);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    }, 5000);
    return () => clearTimeout(timer);
  }, [error]);
  return visible ? (
    <S.ToastContainer>
      {error.errors ? (
        <View>
          {Object.values(error.errors).map(err => (
            <S.WhiteText key={err} size="M">
              {t(`errors.${err}`)}
            </S.WhiteText>
          ))}
        </View>
      ) : (
        <S.WhiteText size="M">
          {error.error
            ? t(`errors.${getOr('', 'error', error)}`)
            : error.code
            ? t(`errors.${getOr('', 'code', error)}`)
            : t('errors.UNKOWN_ERROR')}
        </S.WhiteText>
      )}
      <TouchableOpacity
        onPress={() => {
          setVisible(false);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        }}
        activeOpacity={0.6}
      >
        <Icon
          {...{
            size: 30,
            type: 'feather',
            name: 'x',
            color: theme.colors.white,
          }}
        />
      </TouchableOpacity>
    </S.ToastContainer>
  ) : null;
};
Toast.propTypes = {
  error: PropTypes.object,
};

export default Toast;
