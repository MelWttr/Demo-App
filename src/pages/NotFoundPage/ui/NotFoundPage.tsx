import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
    const { t } = useTranslation();

    return (
        <Page className={cls.notFoundPage}>
            {t('NotFound')}
        </Page>
    );
};
