import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { CommentItem } from 'entities/Comment';
import { ArticleDetailedCommentsSchema } from '../types/ArticleDetailedCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<CommentItem>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailedComments || commentsAdapter.getInitialState(),
);

const articleDetailedCommentsSlice = createSlice({
    name: 'articleDetailedCommentsSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailedCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<CommentItem[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { reducer: articleDetailedCommentsReducer } = articleDetailedCommentsSlice;
