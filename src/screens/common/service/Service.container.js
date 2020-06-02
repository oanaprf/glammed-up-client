import { withOpenModal } from '@@hocs';

import BaseService from './Service';

const Service = withOpenModal(BaseService);

export default Service;
