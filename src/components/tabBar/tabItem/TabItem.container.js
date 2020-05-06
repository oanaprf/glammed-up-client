import { compose, withProps, withHandlers } from 'recompose';

import { withBounceAnimation } from '@@hocs';
import BaseTabItem from './TabItem';

const TabItem = compose(
  withProps({
    hitSlop: { top: 20, bottom: 20, left: 20, right: 20 },
  }),
  withHandlers({
    onPress: ({ emit, navigate, route, isActive }) => () => {
      emit({
        type: 'tabPress',
        target: route.key,
      });
      !isActive && navigate(route.name);
    },
  }),
  withBounceAnimation({ outputRange: [1, 1.1, 1.4], duration: 100 })
)(BaseTabItem);

export default TabItem;
