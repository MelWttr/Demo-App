import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetailed } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { articleDetailedCommentsReducer, getArticleComments } from '../../model/slices/articleDetailedCommentsSlice';
import cls from './ArticleDetailedPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';

interface ArticleDetailedPageProps {
 className?: string;
}

const reducers: ReducerList = {
    articleDetailedComments: articleDetailedCommentsReducer,
};

const ArticleDetailedPage: FC<ArticleDetailedPageProps> = ({ className = '' }: ArticleDetailedPageProps) => {
    const { t } = useTranslation('Article');
    const { id } = useParams<{id: string}>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailedPage, {}, [className])}>
                {t('ArticleNotFound')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.articleDetailedPage, {}, [className])}>
                <ArticleDetailed id={id} />
                <Text className={cls.commentsTitle} title={t('Comments')} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>

        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
