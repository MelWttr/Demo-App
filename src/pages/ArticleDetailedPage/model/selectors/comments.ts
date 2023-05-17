import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailedComments?.isLoading;
export const getArticleCommentsIsError = (state: StateSchema) => state.articleDetailedComments?.error;
