import { withBounceAnimation } from '@@hocs';
import BaseButton from './Button';

const Button = withBounceAnimation({
  outputRange: [1, 0.98, 0.95],
  duration: 70,
})(BaseButton);

export default Button;
