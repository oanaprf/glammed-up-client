import { branch, renderComponent, withProps, compose } from 'recompose';

import { NoResults } from '@@components';
import { t } from '@@config';

import BaseServices from './Services';

const Services = compose(
  withProps({ message: t('profile.noServices') }),
  branch(({ services = [] }) => !services.length, renderComponent(NoResults))
)(BaseServices);

export default Services;
