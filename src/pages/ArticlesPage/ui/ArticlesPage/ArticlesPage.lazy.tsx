import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import { lazy } from 'react';

export const ArticlesPageLazy = lazy(
    () => lazyLoadingTimeout(import('./ArticlesPage'), 1000),
);
