import { lazyLoadingTimeout } from 'shared/lib/lazyLoading';
import { lazy, FC } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
    () => lazyLoadingTimeout(import('./LoginForm'), 400),
);
