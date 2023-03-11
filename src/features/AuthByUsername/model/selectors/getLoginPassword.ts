import { createSelector } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { getLoginState } from './getLoginState';

export const getLoginPassword = createSelector(
    getLoginState,
    (loginFormState: LoginSchema) => loginFormState?.password || '',
);
