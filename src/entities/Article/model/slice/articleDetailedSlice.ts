import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleDetailedSchema } from '../types/articleDetailedSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticleDetailedSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};
export const ArticleDetailedSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },

});

export const { actions: articleDetailedActions } = ArticleDetailedSlice;
export const { reducer: articleDetailedReducer } = ArticleDetailedSlice;
