import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('should return isLoading', () => {
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
                isLoading: true,
                error: '',
                readonly: false,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
});
