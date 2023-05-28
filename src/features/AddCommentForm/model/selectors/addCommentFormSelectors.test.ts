import { StateSchema } from 'app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('getAddCommentFormText.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text',
                error: '',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: '',
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });
    test('text should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
    });
    test('error should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
