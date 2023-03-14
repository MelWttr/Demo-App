import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { userActions } from 'entities/User';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    test('success login', async () => {
        const userValue = { userName: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const userValue = { status: 403 };
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'admin', password: '123' });
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error');
    });
});
