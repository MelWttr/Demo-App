import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { getLoginState } from './getLoginState';

export const getLoginError = createSelector(
    getLoginState,
    (loginFormState: LoginSchema) => loginFormState?.error || '',
);
