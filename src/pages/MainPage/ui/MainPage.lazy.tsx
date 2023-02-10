import {lazyLoadingTimeout} from 'shared/lib/lazyLoading';
import React from 'react';

export const MainPageLazy = React.lazy(
  () => { return lazyLoadingTimeout(import('./MainPage'), 1000)},
  );