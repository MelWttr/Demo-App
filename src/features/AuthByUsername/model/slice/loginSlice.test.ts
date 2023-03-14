import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'admin' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('username'),
            ),
        ).toEqual({ username: 'username' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('12345'),
            ),
        ).toEqual({ password: '12345' });
    });
});
