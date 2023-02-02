import {lazyLoadingTimeout} from '../../helpers/lazyLoading';
import React from 'react';

export const AboutPageLazy = React.lazy(
  () => { return lazyLoadingTimeout(import('./'), 1000)},
  );