import { StateSchema } from 'app/providers/StoreProvider';
import { Country, Currency } from 'shared/const/common';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    first: 'string',
                    lastname: 'string',
                    age: 22,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'string',
                    username: 'string',
                    avatar: 'string',
                },
                isLoading: false,
                error: 'error',
                readonly: false,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual('');
    });
});
