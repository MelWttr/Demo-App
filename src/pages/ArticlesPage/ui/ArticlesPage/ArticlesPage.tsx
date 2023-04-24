import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
 className?: string;

}

const ArticlesPage: FC<ArticlesPageProps> = ({ className = '' }: ArticlesPageProps) => {
    const { t } = useTranslation('Article');
    return (
        <div className={classNames(cls.articlesPage, {}, [className])} />
    );
};

export default memo(ArticlesPage);
