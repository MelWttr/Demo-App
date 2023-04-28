import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetailed } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailedPage.module.scss';

interface ArticleDetailedPageProps {
 className?: string;
}

const ArticleDetailedPage: FC<ArticleDetailedPageProps> = ({ className = '' }: ArticleDetailedPageProps) => {
    const { t } = useTranslation('Article');
    const { id } = useParams<{id: string}>();
    if (!id) {
        return (
            <div className={classNames(cls.articleDetailedPage, {}, [className])}>
                {t('ArticleNotFound')}
            </div>
        );
    }
    return (
        <div className={classNames(cls.articleDetailedPage, {}, [className])}>
            <ArticleDetailed id={id} />
            <Text title={t('Comments')} />
            <CommentList />
        </div>
    );
};

export default memo(ArticleDetailedPage);
