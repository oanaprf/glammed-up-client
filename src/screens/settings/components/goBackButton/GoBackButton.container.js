import { withHandlers } from 'recompose';

import BaseGoBackButton from './GoBackButton';

const GoBackButton = withHandlers({
  onGoBackPress: ({ navigation }) => () => navigation.goBack(),
})(BaseGoBackButton);

export default GoBackButton;
