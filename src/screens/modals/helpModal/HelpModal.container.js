import { withUseState } from '@@hocs';
import BaseHelpModal from './HelpModal';

const HelpModal = withUseState('index', 0)(BaseHelpModal);

export default HelpModal;
