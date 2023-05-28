import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = { text: 'text' };
        expect(
            addCommentFormReducer(
                state as AddCommentFormSchema,
                addCommentFormActions.setText('text'),
            ),
        ).toEqual({ text: 'text' });
    });
});
