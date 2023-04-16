import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import { lazy } from 'react';

export const ArticleDetailedPageLazy = lazy(
    () => lazyLoadingTimeout(import('./ArticleDetailedPage'), 1000),
);
