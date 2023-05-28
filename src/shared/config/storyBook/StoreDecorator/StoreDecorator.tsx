import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailedReducer } from 'entities/Article/model/slice/articleDetailedSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slice/addCommentFormSlice';
import { articleDetailedCommentsReducer } from 'pages/ArticleDetailedPage/model/slices/articleDetailedCommentsSlice';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetailed: articleDetailedReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailedComments: articleDetailedCommentsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
