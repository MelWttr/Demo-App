import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from 'shared/const/localStorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(AUTH_TOKEN);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_TOKEN);
        },
    },

});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
