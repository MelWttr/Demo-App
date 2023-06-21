import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import React from 'react';

export const ProfilePageLazy = React.lazy(
    () => lazyLoadingTimeout(import('./ProfilePage'), 400),
);
