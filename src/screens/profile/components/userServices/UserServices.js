import React from 'react';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

import { theme } from '@@config';
import { withOpenModal } from '@@hocs';
import * as C from '@@utils/constants';
import Services from './Services.container';

import * as S from './styled';

const UserServices = ({ openModal, services, user, isOwnProfile }) => (
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    }}
  >
    <Services {...{ user, services }} />
    {isOwnProfile ? (
      <S.StyledButton onPress={() => openModal({ name: C.MODALS.ADD_SERVICE })}>
        <Icon
          {...{
            name: 'plus',
            type: 'feather',
            size: 25,
            color: theme.colors.white,
          }}
        />
      </S.StyledButton>
    ) : null}
  </ScrollView>
);

UserServices.propTypes = {
  openModal: PropTypes.func.isRequired,
  services: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  isOwnProfile: PropTypes.bool.isRequired,
};

export default withOpenModal(UserServices);
