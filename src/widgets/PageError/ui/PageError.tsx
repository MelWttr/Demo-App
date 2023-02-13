import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
 className?: string;

}

export const PageError: FC<PageErrorProps> = ({ className = '' }: PageErrorProps) => {
    const { t } = useTranslation();
    const reloadHandler = () => window.location.reload();
    return (
        <div className={classNames(cls.pageError, {}, [className])}>
            <p>{t('Error')}</p>
            <Button onClick={reloadHandler}>{t('Reload')}</Button>
        </div>
    );
};
