import axios from 'axios';
import { AUTH_TOKEN } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(AUTH_TOKEN) || '',
    },
});
