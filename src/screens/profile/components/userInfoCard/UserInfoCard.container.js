import { compose, branch, renderComponent, nest, withProps } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon, NoResults } from '@@components';
import { user } from '@@store/modules';

import BaseUserInfoCard from './UserInfoCard';
import * as S from './styled';

const UserInfoCard = compose(
  connect((state, props) => ({
    isLoading: user.selectors.isUserInfoLoading(state, props),
  })),
  withProps({ message: 'profile.noUserInfo' }),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon)),
    branch(
      // eslint-disable-next-line no-shadow
      ({ user = {} }) => !user.phoneNumber && !user.address,
      renderComponent(nest(S.NoResultsContainer, NoResults))
    )
  )
)(BaseUserInfoCard);

export default UserInfoCard;
