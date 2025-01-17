import { compose, withHandlers } from 'recompose';
import { Keyboard } from 'react-native';

import { withBounceAnimation } from '@@hocs';

import BaseStar from './Star';

const Star = compose(
  withHandlers({
    onPress: ({ setRating, index, onChange }) => () => {
      onChange && onChange(index);
      setRating(index);
      Keyboard.dismiss();
    },
  }),
  withBounceAnimation({
    outputRange: [1, 1.2, 1.4],
    duration: 70,
  })
)(BaseStar);

export default Star;
