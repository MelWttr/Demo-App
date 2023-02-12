import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import { lazy } from 'react';

export const AboutPageLazy = lazy(
    () => lazyLoadingTimeout(import('./AboutPage'), 1000),
);
