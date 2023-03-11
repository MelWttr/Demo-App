import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { getLoginState } from './getLoginState';

export const getLoginIsLoading = createSelector(
    getLoginState,
    (loginFormState: LoginSchema) => loginFormState?.isLoading || false,
);
