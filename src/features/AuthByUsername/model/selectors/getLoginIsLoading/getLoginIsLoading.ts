import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from '../getLoginState/getLoginState';

export const getLoginIsLoading = createSelector(
    getLoginState,
    (loginFormState: LoginSchema | undefined) => loginFormState?.isLoading || false,
);
