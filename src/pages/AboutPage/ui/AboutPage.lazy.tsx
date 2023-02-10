import {lazyLoadingTimeout} from 'shared/lib/lazyLoading';
import React from 'react';

export const AboutPageLazy = React.lazy(
  () => { return lazyLoadingTimeout(import('./AboutPage'), 1000)},
  );