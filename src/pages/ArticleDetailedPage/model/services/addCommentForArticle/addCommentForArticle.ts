import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentItem } from 'entities/Comment';
import { getArticleDetailedData } from 'entities/Article/model/selectors/articleDetailed';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    CommentItem,
    string,
    ThunkConfig<string>
    >(
        'adrticleDetailed/addCommentForArticle',
        async (text, thunkApi) => {
            const {
                dispatch, extra, rejectWithValue, getState,
            } = thunkApi;

            const userData = getUserAuthData(getState());
            const article = getArticleDetailedData(getState());

            if (!userData || !text || !article) {
                rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<CommentItem>('/comments', {
                    articleId: article?.id,
                    userId: userData?.id,
                    text,

                });
                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(article?.id));

                return response.data;
            } catch (error) {
                console.log(error);
                return rejectWithValue('error');
            }
        },
    );
