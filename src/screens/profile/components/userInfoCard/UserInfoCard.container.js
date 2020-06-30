import { compose, branch, renderComponent, nest } from 'recompose';
import { connect } from 'react-redux';

import { BigLoaderIcon } from '@@components';
import { user } from '@@store/modules';

import BaseUserInfoCard from './UserInfoCard';
import * as S from './styled';

const UserInfoCard = compose(
  connect((state, props) => ({
    isLoading: user.selectors.isUserInfoLoading(state, props),
  })),
  branch(
    ({ isLoading }) => isLoading,
    renderComponent(nest(S.LoaderContainer, BigLoaderIcon))
  )
)(BaseUserInfoCard);

export default UserInfoCard;
