import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailedData,
    getArticleDetailedIsLoading,
    getArticleDetailedError,
} from './articleDetailed';

describe('articleDetailed.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetailed: {
                data,
            },
        };
        expect(getArticleDetailedData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailedData(state as StateSchema)).toEqual(undefined);
    });
});

test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetailed: {
            error: 'error',
        },
    };
    expect(getArticleDetailedError(state as StateSchema)).toEqual('error');
});
test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailedError(state as StateSchema)).toEqual(undefined);
});

test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
        articleDetailed: {
            isLoading: true,
        },
    };
    expect(getArticleDetailedIsLoading(state as StateSchema)).toEqual(true);
});
test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailedIsLoading(state as StateSchema)).toEqual(false);
});
