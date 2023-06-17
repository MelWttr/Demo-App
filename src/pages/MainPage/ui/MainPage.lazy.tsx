import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import React from 'react';

export const MainPageLazy = React.lazy(
    () => lazyLoadingTimeout(import('./MainPage'), 400),
);
