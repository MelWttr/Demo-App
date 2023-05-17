import { EntityState } from '@reduxjs/toolkit';
import { CommentItem } from 'entities/Comment';

export interface ArticleDetailedCommentsSchema extends EntityState<CommentItem> {
    isLoading?: boolean;
    error?: string;
}
