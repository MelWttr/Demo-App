import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailedPage.module.scss';

interface ArticleDetailedPageProps {
 className?: string;

}

const ArticleDetailedPage: FC<ArticleDetailedPageProps> = ({ className = '' }: ArticleDetailedPageProps) => {
    const { t } = useTranslation('Article');
    return (
        <div className={classNames(cls.articleDetailedPage, {}, [className])}>
            ARTICLE DETAILS
        </div>
    );
};

export default memo(ArticleDetailedPage);
