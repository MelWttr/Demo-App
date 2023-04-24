import { Article } from 'entities/Article';

export interface ArticleDetailedSchema {
    isLoading: boolean;
    error?: string;
    data?: Article
}
