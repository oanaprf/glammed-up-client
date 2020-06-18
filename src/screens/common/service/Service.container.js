import { compose, withProps } from 'recompose';
import getOr from 'lodash/fp/getOr';

import { withOpenModal } from '@@hocs';
import BaseService from './Service';

const defaultImage = require('@@assets/images/image-placeholder.png');

const Service = compose(
  withProps(({ service }) => ({
    servicePicture: getOr(defaultImage, 'pictures.0', service),
  })),
  withOpenModal
)(BaseService);

export default Service;
