import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../Sidebar/module/items';

interface SidebarItemProps {
 item: SidebarItemType;

}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
        >
            <item.Icon className={cls.linkIcon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
